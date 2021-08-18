import { createSelector } from 'reselect';
import { IMAGE_BASE_URL } from '../../services/movies';
import {
  MOVIE_LIST,
  LOADING_MOVIES,
  RESPONSE_PAGE,
  LOAD_MORE_RESULTS,
  MOVIE_TYPE
} from '../types';

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
  loading: false,
  movieType: 'now_playing',
  movieTypeTitle: 'Now Playing'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state,
        list: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.total_pages
      };
    case LOADING_MOVIES:
      return {
        ...state,
        loading: action.payload
      };
    case RESPONSE_PAGE:
      return {
        ...state,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };
    case LOAD_MORE_RESULTS:
      return {
        ...state,
        list: [...state.list, ...action.payload.list],
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };
    case MOVIE_TYPE:
      return {
        ...state,
        movieType: action.payload.movieType,
        movieTypeTitle: action.payload.movieTypeTitle
      };
    default:
      return state;
  }
};

export const getRandomMovies = createSelector(
  (state) => state.movies.list,
  (state) =>
    state
      .sort(() => Math.random() - Math.random())
      .slice(0, 4)
      .map((item, index) => {
        return {
          id: index + 1,
          url: `${IMAGE_BASE_URL}/${item.backdrop_path}`
        };
      })
);
