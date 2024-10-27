import StorageRef from '../../storageRef/StorageRef';
import styles from'./mainBlock4.module.scss';
import React, { useState } from 'react';


export default function MainBlock4({ storage }) {

  const [imageUrl, setImageUrl] = useState([]);
 
  const listRef = 'home/';

  const setImage = (images) => {
  
setImageUrl(images?.find(a => a.metaData.section === 'block4'));
  };


  return (
    <div className="__container">
 <StorageRef setImageUrl={setImage} storage={storage}listRef={listRef} />
      <main className={styles.mainBlock_4}>
      <section className={styles.mainBlock_4_block}>
       
          <div className={styles.mainBlock_4_block_image}>
          {imageUrl ? <img src={imageUrl.url} alt='' /> : null}
          </div>
          <div className={styles.mainBlock_4_block_block}>
          <div className={styles.mainBlock_4_block_text}>
          We care about the comfort of our couples, so we structure the preparation work in such a way that<br></br>to save your time, offer services that are suitable for you.

          </div>
          <div className={`${styles.mainBlock_4_block_text} ${styles.text2}`}>
          For the maximum result, we do not chase the number of organized holidays.<br></br>We like to pay attention to each couple, each client.<br></br>"Live" the preparation and the most important day together...
          
          </div>
        </div>
      </section>
    </main>
    </div>
    
  );
}
