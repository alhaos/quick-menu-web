import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/backend/api/auth/check');
        setIsAuth(response.ok);
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuth(false);
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth().then();

    return () => {};
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // или спиннер/скелетон
  }

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}
