import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_API_BASE_URL
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.api_key = process.env.REACT_APP_MOVIE_API_KEY;
  return config;
});

export default api;
