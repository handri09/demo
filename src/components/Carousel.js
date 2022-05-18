import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 558, itemsToShow: 2 },
  { width: 765, itemsToShow: 3 },
  { width: 1209, itemsToShow: 4 }
];

function CarouselFC({ sources }) {
  return (
    <Carousel breakPoints={breakPoints}>
      {sources.map(item => (
        <Link to={item.to} key={item.id} className={``}>
          <img
            src={item.src}
            className='w-full hover:opacity-80 hover:shadow-lg border-4 border-transparent rounded-md hover:border-white'
            alt={item.src}
          />
        </Link>
      ))}
    </Carousel>
  );
}

export default CarouselFC;
