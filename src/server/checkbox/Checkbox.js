import React, { useState } from 'react';
import Storages from '../homeAdmin/content/storages/Storages';
import MainBlock1 from '../../js/main/mainBlock_1/MainBlock_1'; 

export default function Checkbox({ storage, listRef, nameList }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleCheckboxChange = (image) => {
    setSelectedImages((prevSelectedImages) => {
      const index = prevSelectedImages.findIndex((selectedImage) => selectedImage.id === image.id);

      if (index !== -1) {
        const updatedSelectedImages = [...prevSelectedImages];
        updatedSelectedImages.splice(index, 1);
        return updatedSelectedImages;
      }

      return [...prevSelectedImages, image];
    });
  };

  return (
    <div>
      <Storages
        storage={storage}
        listRef={listRef}
        nameList={nameList}
        selectedImages={selectedImages} // Pass selectedImages as prop
        handleCheckboxChange={handleCheckboxChange} // Pass handleCheckboxChange as prop
      />
      <MainBlock1 storage={storage} selectedImages={selectedImages} />
    </div>
  );
}





