export default async function isAuthorized() {
  try {
    const response = await fetch('/backend/api/auth/check', {
      credentials: 'include'
    });
    if (!response.ok) {
      return [false, new Error(response.statusText)];
    }
    return [true, null];
  } catch (err) {
    return [false, new Error(err)];
  }
}
