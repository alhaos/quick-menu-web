import React from 'react';
import styles from './MenuButton.module.css';

const MenuButton = () => {
  return (
    <div className={styles.MenuButton}>
      <svg
        className={styles.SVG}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300">
        <rect
          className={styles.Rect}
          stroke="#777"
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
          stroke="#777"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 55 250q 50 0 50 -50v -20q -50 -0 -50 -50v -80h 130v 80q 0 50 -50 50v 20q 0 50 50 50m 20 -200v 50m 20 -50v 50m 20 -50v 60q 0 20 -20 20v 120"
        />
      </svg>
    </div>
  );
};

export default MenuButton;
