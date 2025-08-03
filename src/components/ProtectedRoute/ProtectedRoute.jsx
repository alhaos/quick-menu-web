import React from 'react';
import useAuth from '../../hooks/useAuth.jsx';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ children }) {
  const { isAuthorized, error } = useAuth();

  if (error) {
    return <div>authorization error: {error}</div>;
  }

  if (!isAuthorized) {
    return <div>authorization failed</div>;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};
