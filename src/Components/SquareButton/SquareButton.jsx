import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SquareButton.module.css";

function SquareButton({ callBack }) {
  const [isLoading, setIsLoading] = useState(false);

  async function callBackHandler() {
    setIsLoading(true);
    try {
      await callBack();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.SquareButton}>
      <button
        onClick={callBackHandler}
        disabled={isLoading}
        className={isLoading ? "loading" : ""}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
        >
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
}

export default SquareButton;

SquareButton.propTypes = {
  callBack: PropTypes.func.isRequired,
};
