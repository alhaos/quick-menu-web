import React from 'react';
import styles from './Categories.module.css';
import Header from '../../components/header/header.jsx';

export const Categories = () => {
  return (
    <div className={styles.Categories}>
      <Header />
      <h1>Категории:</h1>
    </div>
  );
};
