import React from 'react';
import styles from './header.module.css';
import logo from './logo100x100.png';

function Header(props) {
  const id = props.id;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.box}>
          <img className={styles.logo} src={logo} alt="no imega found" />
          <h1>Меню {id}</h1>
          <p>Добро пожаловать в сервис для создания QR Меню</p>
        </div>
      </div>
    </>
  );
}

export default Header;
