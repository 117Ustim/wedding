import styles from './button.module.scss';
import { useRef } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function Button({setImages,handleUpload}) {

 const inputRef = useRef(null);

 
  const hanldeSelect = (e) => {
   const files = Array.from(e.target.files);
   files.forEach(file => {
   const reader = new FileReader();
   reader.onload = (er) => {
   
    setImages((prev) => {
      return [
        ...prev,
        {
          name:file.name,
          size:file.size,
          url:reader.result,
          id:uuidv4(),
          file,
        }
      ];
    });
   };
   reader.readAsDataURL(file);
   });
   
  };

return (
<div className={styles.block_button}>
<input onChange={hanldeSelect} type="file" ref ={inputRef} className={styles.input} multiple/>
<button   onClick={() => inputRef.current.click()}>Выбрать</button>
{/* <button onClick={handleUpload} className={styles.download}>Загрузить</button> */}
 </div>
);
}