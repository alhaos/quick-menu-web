import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditButton.module.css';

const EditButton = ({ onClick }) => {
  return (
    <div className={styles.CustomButton}>
      <button type="button" onClick={onClick}>
        <svg
          viewBox="0 0 300 300"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <rect
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
            stroke="#0ff"
            fill="none"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M70,230l0,0v-50l120,-120q10,-10 20,0l30,30q10,10 0,20l-120,120h-50m0,-30l30 30m20,0l-50,-50m100,-100l50,50m10,-10l-50,-50m0,30l-90,90m20,20l90,-90"
          />
        </svg>
      </button>
    </div>
  );
};

export default EditButton;

EditButton.propTypes = {
  onClick: PropTypes.func,
  svg: PropTypes.node
};
