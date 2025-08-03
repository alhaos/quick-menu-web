export default async function Logoff() {
  try {
    const result = await fetch('/backend/api/auth/logoff');
    if (!result.ok) {
      return Error('Logoff failed.');
    }
    return null;
  } catch (err) {
    return err.message;
  }
}
