import styles from './progressBar.module.scss';

export default function ProgressBar({percentage}) {

return (
<div className={styles.progressBar}>
<span>{Math.floor(percentage)}%</span>
<div style={{width:percentage + '%'}} className={styles.percentage}></div>

 </div>
);
}