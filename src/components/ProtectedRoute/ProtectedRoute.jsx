import useAuth from '../../hooks/useAuth.jsx';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthorized, isLoading, error } = useAuth();

  // console.log('is authorized in ProtectionRoute: ', isAuthorized);
  // console.log('is loading in ProtectionRoute: ', isLoading);
  // console.log('error in ProtectionRoute: ', error);

  useEffect(() => {
    if (!isLoading && !isAuthorized) {
      navigate('/'); // Перенаправляем, если не авторизован
    }
  }, [isAuthorized, isLoading, navigate]);

  if (isLoading) {
    return null; // или <Spinner />, пока идёт проверка
  }

  if (error) {
    console.error('Auth check error:', error);
    return null; // или показать ошибку
  }

  return isAuthorized ? children : null;
};

ProtectedRoute.propTypes = { children: PropTypes.node };
