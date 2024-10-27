
import Storages from './../storages/Storages';

export default function HomeAd({ storage }) {
  const listRef = 'home/';
  const nameList = 'HOME';
  return (
  
  
   <div >
  <Storages listRef={listRef} storage={storage}nameList={nameList}/>
  
   </div> 
  );
}