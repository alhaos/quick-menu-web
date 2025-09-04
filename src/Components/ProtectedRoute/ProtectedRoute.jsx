import React, { useState, useEffect, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext.jsx';

export default function ProtectedRoute() {
  const ctx = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    fetch('/backend/api/auth/check')
      .then((response) => {
        if (response.ok) {
          setIsAuth(true);
        } else {
          ctx.logoff();
        }
      })
      .catch(() => {
        ctx.logoff();
      })
      .finally(() => {
        setIsChecking(false);
      });
  }, []);

  if (isChecking) {
    return <div>Loading...</div>; // или спиннер/скелетон
  }

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}
