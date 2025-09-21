import React from 'react';
import styles from './Menu.module.css';
import Item from './Item/Item.jsx';

export default function Menu() {
  return (
    <div className={styles.Menu}>
      <Item name={'Кофе'} />
      <Item name={'Чай'} />
      <Item name={'Напитки'} />
    </div>
  );
}
