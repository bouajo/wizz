import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

// Attach token from localStorage to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token'); // Get token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Set Authorization header
  }
  return config; // Return modified config
});

export default api; // Exporting the api instance