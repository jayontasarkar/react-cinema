/* eslint-disable multiline-ternary */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovies,
  setResponsePageNumber
} from '../../../store/actions/movies';
import { getRandomMovies } from '../../../store/reducers/movies';
import Paginate from '../../paginate/Paginate';
import Grid from '../grid/Grid';
import Slideshow from '../slideshow/Slideshow';
import './MainContent.scss';

const MainContent = () => {
  const dispatch = useDispatch();
  const { loading, movieType, movieTypeTitle, totalPages, page } = useSelector(
    (state) => state.movies
  );
  const [current, setCurrent] = useState(page);
  const images = useSelector(getRandomMovies);

  const paginate = (type) => {
    let pageNumber = current;
    if (type === 'prev' && current >= 1) {
      pageNumber -= 1;
    } else {
      pageNumber += 1;
    }
    setCurrent(pageNumber);
    dispatch(setResponsePageNumber(pageNumber, totalPages));
    dispatch(fetchMovies(movieType, pageNumber, false));
  };

  return (
    <div className="main-content">
      {loading ? (
        <p>Loading...</p>
      ) : images && images.length ? (
        <>
          <Slideshow images={images} auto={true} showArrows={false} />
          <div className="grid-movie-title">
            <div className="movieType">{movieTypeTitle}</div>
            <div className="paginate">
              <Paginate
                current={current}
                total={totalPages}
                paginate={paginate}
              />
            </div>
          </div>
          <Grid images={images} />
        </>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MainContent;
