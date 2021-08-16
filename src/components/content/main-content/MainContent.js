import React, { useState } from 'react';
import Paginate from '../../paginate/Paginate';
import Grid from '../grid/Grid';
import Slideshow from '../slideshow/Slideshow';
import './MainContent.scss';

const MainContent = () => {
  const images = [
    {
      rating: 7.5,
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      rating: 6.5,
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      rating: 9.5,
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      rating: 7.5,
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      rating: 9.5,
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      rating: 7,
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  ];
  const [current, setCurrent] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && current >= 1) {
      setCurrent(current - 1);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={false} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate current={current} total={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
