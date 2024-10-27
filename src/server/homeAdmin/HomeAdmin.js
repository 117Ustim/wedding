import styles from './homeAdmin.module.scss';

import React from 'react';

import Home from './content/home/HomeAd';
import Concept from './content/content_1/ConceptAdmin';
import Decor from './content/content_2/Decor';
import Gallery from './content/content_3/Gallery';
import Contact from './content/content_4/Contact';
import Slider from './content/slider/Slider';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';

export default function HomeAdmin() {
  const navigate = useNavigate();

  const exit = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {});
  };

  return (
    <div className={styles.homeAdmin}>
        <button className={styles.exit} onClick={exit}>
        Exit
      </button>
      <form>
        <Link className='link' underline='hover' color='inherit' to='home'>
          <button className={styles.red} type='button'>
            <i className={styles.icon}></i>Home
          </button>
        </Link>
        <Link className='link' underline='hover' color='inherit' to='concept'>
          <button className={styles.red} type='button'>
            <i className={styles.icon}></i>Concept
          </button>
        </Link>
        <Link className='link' underline='hover' color='inherit' to='decor'>
          <button className={styles.red} type='button'>
            <i className={styles.icon}></i>Decor
          </button>
        </Link>
        <Link className='link' underline='hover' color='inherit' to='gallery'>
          <button className={styles.red} type='button'>
            <i className={styles.icon}></i>Gallery
          </button>
        </Link>
        <Link className='link' underline='hover' color='inherit' to='contact'>
          <button className={styles.red} type='button'>
            <i className={styles.icon}></i>Contact
          </button>
        </Link>

        <Link className='link' underline='hover' color='inherit' to='slider'>
          <button className={styles.red} type='button'>
            <i className={styles.icon}></i>Slider Home
          </button>
        </Link>
      </form>

    
    </div>
  );
}
