import React from 'react';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

export default function Item({ name }) {
  return <div className={styles.Item}>{name}</div>;
}

Item.propTypes = {
  name: PropTypes.string.isRequired
};
