import React from 'react';
import styles from './header.module.css';
import logo from '/logo100x100.png';

function Header(props) {
  const id = props.id;

  return (
    <>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="no imega found" />
        <h1>Quick menu</h1>
      </div>
    </>
  );
}

export default Header;
