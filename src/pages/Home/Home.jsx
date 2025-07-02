import React from 'react';
import styles from './Home.module.css';
import { Header } from '../../components/header/header.jsx';

export const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <h1>Меню в один скан это - просто, быстро, удобно!</h1>
      <h2>Откройте меню через QR-код — никаких бумажных листов и долгого ожидания!</h2>
      <ul>
        <li>Быстро – сканируйте и выбирайте блюда за секунды</li>
        <li>Удобно – актуальное меню всегда под рукой</li>
        <li>Гигиенично – никаких общих меню</li>
        <li>Экономия – снижаем расходы на печать</li>
      </ul>
      <ol>
        Как это работает?
        <li>Сканируйте QR-код на столе </li>
        <li>Открывайте цифровое меню в браузере</li>
        <li>Выбирайте блюда и делайте заказ</li>
      </ol>
      <ol>
        <li>Microsoft</li>
        <li>Google</li>
        <li>Apple</li>
        <li>IBM</li>
      </ol>
      <h2>Хотите внедрить QR-меню у себя? Подключите сервис за 5 минут!</h2>
    </div>
  );
};
