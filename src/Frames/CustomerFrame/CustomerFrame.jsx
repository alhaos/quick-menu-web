import React from 'react';
import styles from './CustomerFrame.module.css';
import Header from './Header/Header.jsx';
import Menu from './Menu/Menu.jsx';
import Item from './Item/Item.jsx';
export default function CustomerFrame() {
  return (
    <div className={styles.CustomerFrame}>
      <Header name={'Бодрая сова'}></Header>
      <Menu></Menu>
      <Item imageFilename={'C:/repo/quick-menu-web/public/latte.webp'} />
    </div>
  );
}
