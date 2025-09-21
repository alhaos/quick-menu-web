import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

export default function Header({ name }) {
  return <div className={styles.Header}>{name}</div>;
}

Header.propTypes = {
  name: PropTypes.string.isRequired
};
