import React from 'react';
import PropTypes from 'prop-types'; // Добавляем PropTypes
import styles from './header.module.css';
import logo from '/logo.webp';

function Header({ id }) {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="no image found" />
      <div className={styles.caption}> Quick menu {id}</div>
      <button className={styles.button}>Log in {id}</button>
    </div>
  );
}

Header.propTypes = {
  id: PropTypes.string
};

export default Header;
