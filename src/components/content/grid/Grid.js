/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { IMAGE_BASE_URL } from '../../../services/movies';
import LazyImage from '../../lazy-image/LazyImage';
import Rating from '../rating/Rating';
import './Grid.scss';

const Grid = ({ images }) => {
  const movies = useSelector((state) => state.movies.list);

  return (
    <>
      <div className="grid">
        {movies &&
          movies.map((movie, idx) => (
            <div key={idx}>
              <LazyImage
                className="grid-cell"
                src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
              >
                <div className="grid-read-more">
                  <button className="grid-cell-button">Read More</button>
                </div>
                <div className="grid-detail">
                  <span className="grid-detail-title">{movie.title}</span>
                  <div className="grid-detail-rating">
                    <Rating rating={movie.vote_average} totalStars={10} />
                    &nbsp;&nbsp;
                    <div className="grid-vote-average">
                      {movie.vote_average}
                    </div>
                  </div>
                </div>
              </LazyImage>
            </div>
          ))}
      </div>
    </>
  );
};

export default Grid;
