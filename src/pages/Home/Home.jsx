import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/header/header.jsx';

function Home() {
  return (
    <div className={styles.Home}>
      <Header />
    </div>
  );
}

export default Home;
