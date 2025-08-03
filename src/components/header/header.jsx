import React from 'react';
import styles from './header.module.css';
import MenuButton from './MenuButton/MenuButton.jsx';
import Caption from './Caption/Caption.jsx';
import LogoffButton from './LogoffButton/LogoffButton.jsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({ authorized }) {
  return (
    <div className={styles.header}>
      <MenuButton />
      <Caption />
      {authorized ? <LogoffButton /> : <Link to="/login">Login</Link>}
    </div>
  );
}

Header.propTypes = {
  authorized: PropTypes.bool.isRequired
};
