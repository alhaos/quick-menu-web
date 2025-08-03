import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/header/header.jsx';
import isAuthorized from '../../functions/isAuthorized.jsx';

export const Home = () => {
  return (
    <div className={styles.Home}>
      <Header authorized={isAuthorized()} />
      <h1>Home</h1>
    </div>
  );
};
