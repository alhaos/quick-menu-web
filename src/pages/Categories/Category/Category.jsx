import React from 'react';
import styles from './Category.module.css';
import proptypes from 'prop-types';

const Category = ({ name, description }) => {
  return (
    <div className={styles.Category}>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Category;

Category.propTypes = {
  name: proptypes.string,
  description: proptypes.string
};
