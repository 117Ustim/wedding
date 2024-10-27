import { useState,useEffect } from 'react';
import styles from'./adminPanel.module.scss';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

import HomeAdmin from '../homeAdmin/HomeAdmin';

export default function AdminPanel() {

 

  const [login, setLogin] = useState({
    email: '',
    password: '',
    /* hasAccount:!! localStorage.getItem('idToken'), */

    hasAccount:false,
  });





  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  useEffect(() => {
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      }

      setCheckingStatus(false);
    });
  }, []);


  const onChange = (event) => {
    const { name, value } = event.target;
    const val = value;
    setLogin({ ...login, [name]: val });
  };

  const createAccount = () => {
   /*  firebase.auth().createUserWithEmailAndPassword(login.email,login.password); */

     
     
   
      firebase.auth()
      .signInWithEmailAndPassword(login.email, login.password)
      .then((response) => {
        setLogin({ ...login, hasAccount: true });  
      });
     
  };

  return loggedIn ? (
    <HomeAdmin />
  ) :  (
    <div className={styles.adminPanel}>
      <div className={styles.block_panel}>
        <div className={styles.admin}>
          <h1>Admin panel</h1>
        </div>

        <input
          type='text'
          className={styles.lf_input}
          placeholder='e-mail'
          onChange={onChange}
          name='email'
          value={login.email}
        />
        <input
          type='password'
          className={styles.lf_input}
          placeholder='password'
          onChange={onChange}
          name='password'
          value={login.password}
        />

        <button className={styles.lf_submit} onClick={createAccount}>
      
          Log In
        </button>
      </div>
    </div>
  );
}


