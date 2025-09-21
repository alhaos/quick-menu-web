import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext.jsx';
import styles from './Logoff.module.css';

export default function Logoff() {
  const [logoffError, setLogoffError] = useState('');
  const ctx = useContext(AuthContext);

  function onSubmit(e) {
    e.preventDefault();
    fetch('/backend/api/auth/logoff')
      .then((response) => {
        if (response.ok) {
          ctx.logoff();
        } else {
          setLogoffError(response.statusText);
        }
      })
      .catch((e) => {
        setLogoffError(e);
      });
  }
  return (
    <div className={styles.Logoff}>
      <div>{logoffError}</div>
      <form action={onSubmit}>
        <button>Logoff</button>
      </form>
    </div>
  );
}
