import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './Paginate.scss';

const Paginate = ({ current, total, paginate }) => {
  const [page, setPage] = useState();
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    setPage(current);
    setTotalPage(total);
  }, [current, total]);

  return (
    <>
      <span className="pageCount">
        {page} - {totalPage}
      </span>
      <button
        className={'paginate-button' + (page === 1 ? ' disable' : '')}
        onClick={() => paginate('prev')}
      >
        Prev
      </button>
      <button
        className={'paginate-button' + (page === total ? ' disable' : '')}
        onClick={() => paginate('next')}
      >
        Next
      </button>
    </>
  );
};

Paginate.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
};

export default Paginate;
