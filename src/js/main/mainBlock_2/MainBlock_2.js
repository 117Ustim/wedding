import styles from './mainBlock_2.module.scss';
import React, { useState } from 'react';
import StorageRef from '../../storageRef/StorageRef';



export default function MainBlock2({ storage }) {
  const [imageUrl, setImageUrl] = useState([]);

  const listRef = 'home/';

  const setImage = (images) => {
    setImageUrl(images?.find((a) => a.metaData.section === 'block2'));
  };

  return (
    <div className='__container'>
      <StorageRef setImageUrl={setImage} storage={storage} listRef={listRef} />
      <main className={styles.mainBlock_2}>
        <section className={styles.mainBlock_2_block}>
          <div className={styles.mainBlock_2_block_image}>
            {imageUrl ? <img src={imageUrl.url} alt='' /> : null}
          </div>
          <div className={styles.mainBlock_2_block_block}>
            <div className={styles.mainBlock_2_block_text}>
              A wedding organizer is a team, a single coordinated mechanism.
              <br></br>A huge number of people work on creating a wedding. A
              team of professionals who are passionate about their work and will
              make your wildest dreams come true.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
