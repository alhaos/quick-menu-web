import React, { useContext, useState } from 'react';
import styles from './Login.module.css';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext.jsx';
import login from '../../Functions/login.jsx';
import proptypes from 'prop-types';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const authCtx = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default behavior
    setError(''); // reset error

    if (!username.trim() || !password.trim()) {
      setError('Заполните имя пользователя и пароль');
      return;
    }

    setIsLoading(true);

    const [success, error] = await login(username, password);

    setIsLoading(false);

    if (!success) {
      setError(error);
      return;
    }

    authCtx.login();
  }

  return (
    <div className={styles.Login}>
      {authCtx.isAuth && <Navigate to={'menu-manager'} />}
      <h2>Вход</h2>
      {error && <div className={styles.errorMessage}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="username"
            placeholder="имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            id="password"
            placeholder="пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <button type="submit" className={`${styles.loginButton}`} disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  );
}

export default Login;

Login.proptypes = {
  setIsAuth: proptypes.func.isRequired
};
