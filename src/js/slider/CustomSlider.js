import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slider.scss';
import StorageRef from '../storageRef/StorageRef';

const CustomSlider = ({ slideWidth, slideMargin, storage }) => {
  
  const listRef = 'slider/';
  const [imageUrl, setImageUrl] = useState([]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    /*  slidesToShow: 4, // Количество отображаемых слайдов */
    slidesToScroll: 1, // Количество слайдов, перемещаемых при прокрутке
    variableWidth: true, // Позволяет изменять ширину слайдов
    centerMode: true, // Выравнивает слайды по центру
    centerPadding: '0px', // Расстояние между слайдами
    autoplay: false,

    responsive: [
      {
        breakpoint: 768, // Настройки для меньших экранов
        settings: {
          slidesToShow: 4,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480, // Настройки для еще меньших экранов
        settings: {
          slidesToShow: 4,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className='slider  __container'>
      <StorageRef
        setImageUrl={setImageUrl}
        storage={storage}
        listRef={listRef}
      />
      <Slider {...settings} style={{ width: slideWidth }}>
        {imageUrl.map((url, index) => (
          <div key={index}>
            <div style={{ margin: `0 ${slideMargin}px` }}>
              <img src={url.url} alt={`Slide ${index}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
