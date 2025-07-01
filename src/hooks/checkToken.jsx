export const isTokenValid = async () => {
  const response = await fetch('/backend/api/auth/check', {
    credentials: 'include'
  });
  return response.ok;
};
