import React from 'react';
import styles from './item.module.css';

function Item({ caption, price }) {
  return (
    <div className={styles.box}>
      <p className={styles.caption}>{caption}</p>
      <p className={styles.price}>{price}</p>
      <img src="D:\repo\quick-menu-web\src\assets\img\tmp.jpg" alt="on image found" />
    </div>
  );
}

export default Item;
