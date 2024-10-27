import styles from './mainImage.module.scss';
import React, { useState } from 'react';
import StorageRef from '../../storageRef/StorageRef';


export default function MainImage({ storage }) {
  const [imageUrl, setImageUrl] = useState([]);
 
  const listRef = 'home/';

  const setImage = (images) => {
  
setImageUrl(images?.find(a => a.metaData.section === 'main'));
  };

  
  return (
    <div className='__container'>
      <StorageRef setImageUrl={setImage} storage={storage}listRef={listRef} />
      <section className={styles.mainImage}>
        <div className={styles.mainImage_image}>
          {imageUrl ? <img src={imageUrl.url} alt='' /> : null}
        </div>
        <div className={styles.mainImage_title}>
          WE CREATE EMOTIONS EXCEEDING EXPECTATIONS
        </div>
      </section>
    </div>
  );
}
