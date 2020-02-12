export default
const useAuthHeader = () => ({
  'Content-Type': 'application/json',
  'Authorization': process.env.REACT_APP_API_KEY
});
