import styles from './diagram.module.scss';

import React, { useEffect, useState } from 'react';
import {
  uploadBytesResumable,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  deleteObject,
} from 'firebase/storage';

export default function Diagram({images,storage,listRefURL }) {

  const [main, setMain] = useState();
  const [block1, setBlock1] = useState();
  const [block2, setBlock2] = useState();
  const [block3, setBlock3] = useState();
  const [block4, setBlock4] = useState();

  useEffect(()=>{

setMain(images.find(e => e.section === 'main'));
setBlock1(images.find(e => e.section === 'block1'));
setBlock2(images.find(e => e.section === 'block2'));
setBlock3(images.find(e => e.section === 'block3'));
setBlock4(images.find(e => e.section === 'block4'));
  },[images]);

  const handleUpload =  () => { 


 saveImage(main);  
 saveImage(block1); 
 saveImage(block2);  
 saveImage(block3);  
 saveImage(block4);   
   
  
  };

const saveImage = async(image) => {
  
  if (image.file) {
  
  
   await images.filter( e => e.section===image.section).forEach(async e =>  {await deleteObject(e.ref)} ); 
    const storageRef = ref(storage, listRefURL + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image.file, {
      customMetadata: {
        id: image.id,
        section:image.section,
      },
    });
   
  }
}



  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDropMain = (event) => {
    event.preventDefault();
    const imageId = event.dataTransfer.getData('imageId');

    setMain({...images.find((a) => a.id === imageId),section:'main'});
  };

  const handleDropBlock1 = (event) => {
    event.preventDefault();
    const imageId = event.dataTransfer.getData('imageId');

    setBlock1({...images.find((a) => a.id === imageId),section:'block1'});
   
  };

  const handleDropBlock2 = (event) => {
    event.preventDefault();
    const imageId = event.dataTransfer.getData('imageId');

    setBlock2({...images.find((a) => a.id === imageId),section:'block2'});
  };

  const handleDropBlock3 = (event) => {
    event.preventDefault();
    const imageId = event.dataTransfer.getData('imageId');

    setBlock3({...images.find((a) => a.id === imageId),section:'block3'});
  };
  const handleDropBlock4 = (event) => {
    event.preventDefault();
    const imageId = event.dataTransfer.getData('imageId');

    setBlock4({...images.find((a) => a.id === imageId),section:'block4'});
  };
  return (
    <div className={styles.diagram__container} onDragOver={handleDragOver}>
      <div className={styles.container_row}>
        <div className={styles.module_main}>
          <div id='main' className={styles.module_img} onDrop={handleDropMain}>
            <img src={main?.url} alt='' />
          </div>
        </div>
        <div className={styles.module_1}onDrop={handleDropBlock1}>
          <div className={styles.module_text}>Text</div>
          <div className={styles.module_img} >
            <img src={block1?.url} alt='' />
          </div>
        </div>
        <div className={styles.module_1}>
          <div className={styles.module_img} onDrop={handleDropBlock2}>
            <img src={block2?.url} alt='' />
          </div>
          <div className={styles.module_text}>Text</div>
        </div>
        <div className={styles.module_1}>
          <div className={styles.module_text}>Text</div>
          <div className={styles.module_img} onDrop={handleDropBlock3}>
            <img src={block3?.url} alt='' />
          </div>
        </div>
        <div className={styles.module_1}>
          <div className={styles.module_img} onDrop={handleDropBlock4}>
            <img src={block4?.url} alt='' />
          </div>
          <div className={styles.module_text}>Text</div>
        </div>
      </div>
      <button onClick={handleUpload}>Загрузить</button>
    </div>
  );
}
