import { isTokenValid } from '../../hooks/checkToken.jsx';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [authSuccess, setAuthSuccess] = useState(false);

  isTokenValid().then((isValid) => {
    if (isValid) {
      setAuthSuccess(true);
    } else {
      navigate('/');
    }
  });

  return authSuccess ? children : null;
};

ProtectedRoute.propTypes = { children: PropTypes.node };
