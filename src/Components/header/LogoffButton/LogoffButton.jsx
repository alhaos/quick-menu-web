import React from 'react';
import styles from './LogoffButton.module.css';
import { useNavigate } from 'react-router-dom';

export const LogoffButton = () => {
  const navigate = useNavigate();

  const onClickHandlerLogoff = async () => {
    await fetch('/backend/api/auth/logoff');
    navigate('/');
  };

  return (
    <div className={styles.LogoButton}>
      <svg
        onClick={onClickHandlerLogoff}
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
          d="M200,200v50h-140v-200h140v50m-50,50h100l-30,-30m0,60l30,-30"
        />
      </svg>
    </div>
  );
};

export default LogoffButton;
