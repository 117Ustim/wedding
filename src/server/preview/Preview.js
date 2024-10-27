import styles from './preview.module.scss';

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EiB', 'ZiB', 'YiB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export default function Preview({ image, onDelete }) {
  const { url, name, size  } = image;

  const handleDragStart = (event) => {
  
    event.dataTransfer.setData('imageId',image.id);
   
  };
  return (
    <div className={styles.preview}>
      {image.ref && <div className={styles.badge}>Online</div>}
      <span onClick={() => onDelete(image)} className={styles.cross}>
        x
      </span>
      <div className={styles.preview_images}>
        <img src={url} alt='' onDragStart={handleDragStart} />
      </div>
      <div className={styles.preview_name_block}>
        <div className={styles.preview_name}>Name: {name}</div>
        <div className={styles.preview_size}>Size: {formatBytes(size)}</div>
      </div>
    </div>
  );
}
