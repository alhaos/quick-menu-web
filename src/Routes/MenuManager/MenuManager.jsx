import React from 'react';
import Header from '../../Components/header/header.jsx';
import styles from './MenuManager.module.css';
import { Link } from 'react-router-dom';

export default function MenuManager() {
  return (
    <div className={styles.MenuManager}>
      <Header />
      <Link to="/categories">Категории</Link>
      <Link to="/items">Элементы</Link>
    </div>
  );
}
