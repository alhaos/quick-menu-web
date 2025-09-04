import React, { useContext } from 'react';
import styles from './header.module.css';
import MenuButton from './MenuButton/MenuButton.jsx';
import Caption from './Caption/Caption.jsx';
import { AuthContext } from '../../Contexts/AuthContext.jsx';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton/LoginButton.jsx';
import LogoffButton from './LogoffButton/LogoffButton.jsx';

export default function Header() {
  const ctx = useContext(AuthContext);
  return (
    <div className={styles.header}>
      <MenuButton />
      <Caption />
      {ctx.isAuth ? <LogoffButton /> : <LoginButton />}
    </div>
  );
}
