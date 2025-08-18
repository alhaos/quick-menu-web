import React from 'react';
import styles from './LoginButton.module.css';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const onClickHandlerLogin = async () => {
    navigate('/login');
  };

  return (
    <div className={styles.LogoButton}>
      <svg
        onClick={onClickHandlerLogin}
        className={styles.SVG}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300">
        <rect
          className={styles.Rect}
          stroke="#f0f"
          x="10"
          y="10"
          width="280"
          height="280"
          fill="none"
          strokeWidth="4"
          rx="30"
        />
        <path
          className={styles.Path}
          stroke="#0ff"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M100,200v50h150v-200h-150v50m-50,50h100l-30,-30m0,60l30,-30"
        />
      </svg>
    </div>
  );
};

export default LoginButton;
