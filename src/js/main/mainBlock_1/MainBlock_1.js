
import StorageRef from '../../storageRef/StorageRef';
import styles from './mainBlock_1.module.scss';
import React, { useState, useEffect } from 'react';


export default function MainBlock1({storage}) {

  const [imageUrl, setImageUrl] = useState(null);
 
/*   const [selectedImages, setSelectedImages] = useState([]); */
 
  const listRef = 'home/';



  const setImage = (images) => {
   
setImageUrl(images?.find(a => a.metaData.section === 'block1'));
  };
/* 
  useEffect(() => {
    // Update imageUrl when selectedImages change
    if (selectedImages.length > 0) {
      setImageUrl(selectedImages[0].url);
    }
  }, [selectedImages]); */


return (
  <main className="__container">
      <StorageRef setImageUrl={setImage} storage={storage}listRef={listRef} />
<div className={styles.mainBlock_1}>
<section className={styles.mainBlock_1_block}>
<div className={styles.mainBlock_1_block_block}>
<div className={styles.mainBlock_1_block_text}>Organizing a wedding, birthday, or other family celebration is, first of all, an accommodation of a variety of feelings. We create your special day filled with unique emotions!</div>
</div>
 
  <div className={styles.mainBlock_1_block_image}>
  {imageUrl ? <img src={imageUrl.url} alt='' /> : null}
  </div>
</section>
 </div>

  </main>

);
}