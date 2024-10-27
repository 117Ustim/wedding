import styles from './conceptBlock.module..scss';
import Image from '../../../img/concept/wedding-dresses-sydney.jpg';


export default function ConceptBlock1() {
return (
  <div className="__container">
<main className={styles.conceptBlock1}>
<div className={styles.conceptBlock_content}>
 <div className={styles.conceptBlock_content_image}>
  <img src={Image} alt="Image" />
 </div>
 <div className={styles.conceptBlock_content_block}>
  <div className={styles.conceptBlock_content_title}>Concept</div>  
  <div className={styles.conceptBlock_content_text}>At the first meeting, Julia and Dima said that they wanted a fun, incendiary and romantic wedding. An important factor was also the fact that Dima was engaged in dancing and received CCM in ballroom dancing. Communicating with the guys, it became clear that they like to have fun, get together with friends, dance and have fun.</div>  
 </div>
 
</div>
<div className={styles.conceptBlock1_text_block}>
<div className={styles.conceptBlock1_text}>This is how the Love.Dance.Party concept came about. The concept was reflected in the design and scenario of the wedding. The script was divided into three main parts: about the love story of Yulia and Dima, the dance part and the party until the morning.</div>

<div className={styles.conceptBlock1_text}>The venue for the wedding was chosen before the concept was created. The main guideline and selection criterion was Yulia and Dima's wish for a wedding in a pine forest. Based on the limited amount of time and the reservation of other locations, we found the perfect option for a beautiful youth wedding.

</div>

</div>

 </main>

  </div>

);
}