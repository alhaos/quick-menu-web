const API_URL = '/backend/api/auth/login';

export default async function Login(username, password) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: username, password })
    });

    if (!response.ok) {
      return [false, new Error(response.statusText)];
    }
    return [true, null];
  } catch (err) {
    return [false, err];
  }
}
