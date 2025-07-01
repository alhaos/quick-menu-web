import React from 'react';
import Header from '../../components/header/header.jsx';
import styles from './MenuManager.module.css';
import { Link } from 'react-router-dom';

export const MenuManager = () => {
  return (
    <div className={styles.MenuManager}>
      <Header />
      <Link to="/categories">Категории</Link>
    </div>
  );
};
