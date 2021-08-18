import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadMoreMovies,
  setResponsePageNumber
} from '../../store/actions/movies';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
import './Main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const { page, totalPages, loading, movieType } = useSelector(
    (state) => state.movies
  );
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();

  useEffect(() => {
    dispatch(setResponsePageNumber(currentPage, totalPages));
  }, [currentPage, totalPages]);

  const fetchData = () => {
    if (page < totalPages) {
      setCurrentPage((prev) => prev + 1);
      dispatch(loadMoreMovies(movieType, currentPage));
    }
  };

  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineTop } =
      bottomLineRef.current.getBoundingClientRect();
    if (bottomLineTop <= containerHeight) {
      fetchData();
    }
  };

  return (
    <div className="main" ref={mainRef} onScroll={() => handleScroll()}>
      {loading ? <Spinner /> : <MainContent />}
      <div ref={bottomLineRef}></div>
    </div>
  );
};

export default Main;
