

import React, { useState, useEffect } from 'react';
import {ref,listAll,getDownloadURL,getMetadata } from 'firebase/storage';


export default function StorageRef({storage,setImageUrl,listRef}) {

  const listRefURL = listRef;

 
useEffect(() => {
  // Получение списка всех файлов в папке в storage
  const storageRef = ref(storage, listRefURL);
  listAll(storageRef)
    .then((res) => {
      const imagePromises = res.items.map (async(itemRef) =>
      {return  {
        url: await getDownloadURL(itemRef),
        metaData: await getMetadata(itemRef).then(data => data.customMetadata)
      };
    }
        
        
      );
      return Promise.all(imagePromises);
    })
    .then((downloadUrls) => {
      setImageUrl(downloadUrls);
    })
    .catch((error) => {
      console.error('Error getting images from Firebase Storage:', error);
    });
}, [storage]);
}