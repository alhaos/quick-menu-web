import React from 'react';
import styles from './Home.module.css';
import Header from '../../Components/header/header.jsx';

export default function Home() {
  return (
    <div className={styles.Home}>
      <Header />
      <h1>Home</h1>
    </div>
  );
}
