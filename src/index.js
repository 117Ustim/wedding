import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/database';
import 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBdA87Q-nkRAkxI5uu9mBH4sQFuiA7dTHU",
  authDomain: "wedding-3005a.firebaseapp.com",
  projectId: "wedding-3005a",
  storageBucket: "wedding-3005a.appspot.com",
  messagingSenderId: "592433911225",
  appId: "1:592433911225:web:ec54a742717dfc2abd5268"
};


firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
      <BrowserRouter>
       <App storage={storage} />
    
      </BrowserRouter>
   
  </React.StrictMode>
);


