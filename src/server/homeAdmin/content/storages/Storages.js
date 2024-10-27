import { useState, useEffect } from 'react';

import styles from './storages.module.scss';
import stylesButton from '../../../button/button.module.scss';
import Button from '../../../button/Button';
import Preview from '../../../preview/Preview';
import ProgressBar from '../../../progressBar/ProgressBar';
import {
  uploadBytesResumable,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  deleteObject,
} from 'firebase/storage';

import { useNavigate } from 'react-router-dom';
import Diagram from '../diagram/Diagram';

export default function Storages({ storage, listRef, nameList }) {
  const navigate = useNavigate();

  const listRefURL = listRef;

  const [images, setImages] = useState([]);


  const exitAdmin = () => {
    navigate('/admin');
  };

  

  const onDelete = async (image) => {
    try {
      await deleteObject(image.ref); // image.ref содержит ссылку на объект, который вы хотите удалить
      setImages((prev) => prev.filter((_image) => _image.id !== image.id));
      console.log('Изображение успешно удалено.');
    } catch (error) {
      console.error('Ошибка при удалении изображения:', error);
    }
  };

  const getUploadedImages = async () => {
    try {
      const listRef = ref(storage, listRefURL);
      const { items } = await listAll(listRef);

      const currentImage = [];
      for (const itemRef of items) {
        const url = await getDownloadURL(itemRef);
        const metadata = await getMetadata(itemRef);
        currentImage.push({
          name: metadata.name,
          size: metadata.size,
          url,
          ref: itemRef,
          id: metadata.customMetadata.id,
          section: metadata.customMetadata.section,
        });
      }
      setImages(currentImage);
    } catch (error) {
      console.error('Error getting uploaded images:', error);
    }
  };
  useEffect(() => {
    getUploadedImages();
  }, []);

  /* const handleUpload = () => {
    images.forEach((image, index) => {
      if (!image.ref) {
        const storageRef = ref(storage, listRefURL + image.name);
        const uploadTask = uploadBytesResumable(storageRef, image.file, {
          customMetadata: {
            id: image.id,
            order: index,
          },
        });
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            setImages((prev) => {
              return prev.map((_image) => {
                let temp;
                if (_image.id === image.id) {
                  temp = {
                    ..._image,
                    loaded: snapshot.bytesTransferred,
                  };
                }

                if (
                  _image.id === image.id &&
                  snapshot.bytesTransferred === snapshot.totalBytes
                ) {
                  temp = {
                    ...temp,
                    ref: storageRef,
                    done: true,
                  };
                }

                return temp || _image;
              });
            });
          },
          (error) => console.log(error)
        );
      }
    });
  }; */

  const getPercentage = () => {
    const filtered = images.filter((image) => image.loaded);

    if (!filtered.length) {
      return 0;
    }
    const currentSize = filtered?.length
      ? filtered.reduce((sum, image) => {
          return sum + image.loaded;
        }, 0)
      : 0;

    if (!currentSize) {
      return 0;
    }

    const maxSize = images.reduce((sum, image) => {
      return sum + image.size;
    }, 0);

    if (currentSize === maxSize) {
      setImages((prev) => {
        return prev.map((image) => {
          return {
            ...image,
            done: undefined,
            loaded: undefined,
          };
        });
      });

      return 0;
    }

    return (currentSize * 100) / maxSize;
  };

  return (
    <div className={styles.body}>
      <div className={stylesButton.block_button}>
        <button className={stylesButton.exit} onClick={exitAdmin}>
          Exit
        </button>
      </div>
      <Diagram images={images}storage={storage}listRefURL={listRefURL}/>
      <div className={styles.container}>
        <div className={styles.entrance}>
          <div className={styles.preview_slider}>{nameList}</div>
          <ProgressBar percentage={getPercentage()} />
          {images.length > 0 ? (
            <div className={styles.wrapperPreview}>
              {images.map((image) => {
                return (
                  <Preview
                    image={image}
                    key={image.id}
                    onDelete={onDelete}
                    draggable
                   
                  />

                  /*  <Preview image={image} key={image.id} onDelete={onDelete} /> */
                );
              })}
            </div>
          ) : (
            <div className={styles.nodata} style={{ textAlign: 'center' }}>
              Нет данных
            </div>
          )}

          <Button setImages={setImages}  />
        </div>
      </div>
    </div>
  );
}
