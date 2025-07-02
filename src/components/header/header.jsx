import React from 'react';
import styles from './header.module.css';
import useAuth from '../../hooks/useAuth.jsx';
import MenuButton from './MenuButton/MenuButton.jsx';
import Caption from './Caption/Caption.jsx';
import LoginButton from './LoginButton/LoginButton.jsx';
import LogoffButton from './LogoffButton/LogoffButton.jsx';

export const Header = () => {
  const { isAuthorized } = useAuth();

  return (
    <div className={styles.header}>
      <MenuButton />
      <Caption />
      {isAuthorized ? <LogoffButton /> : <LoginButton />}
    </div>
  );
};

export default Header;
