import StorageRef from '../../storageRef/StorageRef';
import styles from './mainBlock_3.module.scss';
import React, { useState } from 'react';

export default function MainBlock3({ storage }) {

  const [imageUrl, setImageUrl] = useState([]);
 
  const listRef = 'home/';

  const setImage = (images) => {
  
setImageUrl(images?.find(a => a.metaData.section === 'block3'));
  };

  return (
    <div className="__container">
  <StorageRef setImageUrl={setImage} storage={storage}listRef={listRef} />
      <main className={styles.mainBlock_3}>
    <section className={styles.mainBlock_3_block}>
    <div className={styles.mainBlock_3_block_block}>
    <div className={styles.mainBlock_3_block_text}>For the maximum result, we do not chase the number of organized holidays.<br></br>We like to pay attention to each couple, each client.<br></br>"Live" the preparation and the most important day together.</div>
    </div>
     
      <div className={styles.mainBlock_3_block_image}>
      {imageUrl ? <img src={imageUrl.url} alt='' /> : null}
      </div>
    </section>
     </main>
    </div>
    
    );
}