import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

function Home(params) {
  return (
    <>
      <Header></Header>
      <div className={styles.box}>
        <h1>Quick menu service</h1>
        <p>Создайте QR меню вашего бизнеса</p>
      </div>
      <Link to="/client?id=1">Client</Link>
    </>
  );
}

export default Home;
