/* import styles from '../slider/slider.module.scss'; */
import Storages from '../storages/Storages';
import {ref} from 'firebase/storage';

export default function ConceptAdmin({storage}) {
  const listRef = 'imagesConcept/';
return (


 <div >
<Storages listRef={listRef} storage={storage}/>

 </div> 
);
}