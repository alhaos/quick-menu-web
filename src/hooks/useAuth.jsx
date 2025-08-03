import { useEffect, useState } from 'react';
export default function useAuth() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      try {
        const response = await fetch('/backend/api/auth/check', {
          credentials: 'include'
        });

        if (isMounted) {
          setIsAuthorized(response.ok);
        }
      } catch (error) {
        if (isMounted) {
          setError(error instanceof Error ? error : new Error('Something went wrong'));
          setIsAuthorized(false);
        }
      }
    }

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  return { isAuthorized, error };
}
