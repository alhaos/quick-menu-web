import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';
import { MenuButton } from './MenuButton/MenuButton.jsx';
import { LogoButton } from './LogoButton/LogoButton.jsx';
import { Caption } from './Caption/Caption.jsx';
import { useNavigate } from 'react-router-dom';
import { isTokenValid } from '../../hooks/checkToken.jsx';

function Header() {
  return (
    <div className={styles.header}>
      <MenuButton />
      <Caption />
      <LogoButton />
    </div>
  );
}

Header.propTypes = {
  id: PropTypes.string
};

export default Header;
