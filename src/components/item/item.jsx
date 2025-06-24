import React from 'react';
import styles from './item.module.css';
import image from './tmp.jpg';
import proptypes from 'prop-types';

const Item = ({ caption, price }) => {
  return (
    <div className={styles.box}>
      <p className={styles.caption}>{caption}</p>
      <img src={image} alt="on image found" className={styles.image} />
      <p className={styles.price}>{price}</p>
    </div>
  );
}

Item.propTypes = {
  caption: proptypes.string.isRequired,
  price: proptypes.number.isRequired,
}

export default Item;
