import { getMovies } from '../../services/movies';
import {
  MOVIE_LIST,
  SET_ERROR,
  LOADING_MOVIES,
  LOAD_MORE_RESULTS,
  RESPONSE_PAGE,
  MOVIE_TYPE
} from '../types';

export const fetchMovies =
  (type, pageNo = 1, loader = true) =>
  async (dispatch) => {
    try {
      dispatch({ type: LOADING_MOVIES, payload: loader });
      const {
        data: { results, page, total_pages }
      } = await getMovies(type, pageNo);
      dispatch({ type: MOVIE_LIST, payload: { results, page, total_pages } });
      dispatch({ type: LOADING_MOVIES, payload: false });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
      dispatch({ type: LOADING_MOVIES, payload: false });
    }
  };

export const loadMoreMovies =
  (type, pageNo = 1) =>
  async (dispatch) => {
    try {
      const {
        data: { results, page, total_pages }
      } = await getMovies(type, pageNo);
      dispatch({
        type: LOAD_MORE_RESULTS,
        payload: { list: results, page, totalPages: total_pages }
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
  dispatch({ type: RESPONSE_PAGE, payload: { page, totalPages } });
};

export const setMovieType = (type, title) => (dispatch) => {
  dispatch({
    type: MOVIE_TYPE,
    payload: { movieType: type, movieTypeTitle: title }
  });
};
