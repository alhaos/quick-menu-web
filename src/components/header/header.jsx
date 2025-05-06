import React from 'react';
import styles from './header.module.css';

function Header(props) {
  const id = props.id;

  return (
    <>
      <div className={styles.header}>
        <h1>Быстрое меню, клиент: {id}</h1>
      </div>
    </>
  );
}

export default Header;
