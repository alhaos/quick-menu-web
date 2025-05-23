import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Header from '../../components/header/header';

function Home(params) {
  return (
    <>
      <Header></Header>
      <div className={styles.box}>
        <h1>Quick menu service</h1>
        <p>Создайте QR меню вашего бизнеса</p>
      </div>
    </>
  );
}

export default Home;
