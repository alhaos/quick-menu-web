import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';

function Item({ name, imageFilename, description, price }) {
  return (
    <div className={styles.Item}>
      <img className={styles.imageFilename} src={imageFilename} alt="no image found" />
      <div className={styles.description}>{description}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price}</div>
    </div>
  );
}

export default Item;

Item.prototype = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageFilename: PropTypes.string,
  price: PropTypes.number.isRequired
};
