import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:5000/`,
  timeout: 1000 * 5, 
});

export default api; 