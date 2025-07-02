import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/backend/api/auth/check', {
          credentials: 'include'
        });
        setIsAuthorized(response.ok);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  // console.log('is authorized in useAuth: ', isAuthorized);
  // console.log('is loading in useAuth: ', isLoading);
  // console.log('error in useAuth: ', error);

  return { isAuthorized, isLoading, error };
};

export default useAuth;
