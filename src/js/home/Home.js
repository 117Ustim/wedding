import Footer from '../footer/Footer';
import Header from '../header/Header';
import MainBlock1 from '../main/mainBlock_1/MainBlock_1';

import  useState  from 'react';

import MainImage from '../main/mainImage/MainImage';
import MainBlock2 from '../../js/main/mainBlock_2/MainBlock_2';

import CustomSlider from './../slider/CustomSlider';
import MainBlock3 from '../main/mainBlock_3/MainBlock_3';
import MainBlock4 from '../main/mainBlock_4/MainBlock4';
import Storages from '../../server/homeAdmin/content/storages/Storages';

export default function Home({storage}) {

  

  return (
    <div className='wrapper'>
      <Header />
      <MainImage storage={storage}/>
      <MainBlock1 storage={storage}/>
      <MainBlock2 storage={storage}/>
      <CustomSlider slideWidth={1000} slideMargin={5} storage={storage}/>
      <MainBlock3 storage={storage}/>
      <MainBlock4 storage={storage}/>
    
      {/*  <Footer/> */}
    </div>
  );
}
