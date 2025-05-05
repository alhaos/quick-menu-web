import React from 'react';
import styles from './item.module.css';
import image from './tmp.jpg';

function Item({ caption, price }) {
  return (
    <div className={styles.box}>
      <p className={styles.caption}>{caption}</p>
      <p className={styles.price}>{price}</p>
      <img src={image} alt="on image found" className={styles.image} />
    </div>
  );
}

export default Item;
