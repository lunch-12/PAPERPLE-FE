export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://paperple.n-e.kr'
    : 'http://localhost:8080';

export default API_BASE_URL;
