import React from 'react';
import styles from './Item.module.css';
import latteImage from 'C:/repo/quick-menu-web/public/latte.webp';
import PropTypes from 'prop-types';

export default function Item({ imageFilename }) {
  console.log('imageFilename: [' + imageFilename + ']');

  return (
    <div className={styles.Item}>
      <img className={styles.Image} src={latteImage} alt="no image foung" />
      <div className={styles.Caption}>Latte</div>
      <div className={styles.Price}>150р.</div>
    </div>
  );
}

Item.propTypes = {
  imageFilename: PropTypes.string.isRequired
};
