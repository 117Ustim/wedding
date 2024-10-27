import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import Concept from './js/concept/Concept';
import Home from './js/home/Home';
import AdminPanel from './server/adminpanel/AdminPanel';
import Contact from './server/homeAdmin/content/content_4/Contact';
import HomeAd from './server/homeAdmin/content/home/HomeAd';
import Slider from './server/homeAdmin/content/slider/Slider';
import ConceptAdmin from './server/homeAdmin/content/content_1/ConceptAdmin';
import Decor from './server/homeAdmin/content/content_2/Decor';
import Gallery from './server/homeAdmin/content/content_3/Gallery';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import Storages from './server/homeAdmin/content/storages/Storages';




export default function App({ storage }) {
 
  useEffect(() => {
    const db = firebase.database();
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='admin' element={<AdminPanel />} />
        <Route path='/' element={<Home storage={storage}/>} />
        <Route path='concept' element={<Concept />} />
      
        <Route path='admin/slider' element={<Slider storage={storage} />} />
          <Route path='admin/home' element={<HomeAd storage={storage}/>} />
          <Route path='admin/concept' element={<ConceptAdmin storage={storage}/>} />
        <Route path='admin/decor' element={<Decor />} />
        <Route path='admin/gallery' element={<Gallery />} />
        <Route path='admin/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}
