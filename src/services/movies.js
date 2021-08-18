import api from './api';

export const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_API_BASE_URL;

export const getMovies = async (type, page = 1) => {
  return await api.get(`movie/${type}?language=en-US&page=${page}`);
};
