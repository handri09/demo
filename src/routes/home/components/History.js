import React from 'react';
import computer from '../../../assets/home/2a.png';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 558, itemsToShow: 1 },
  { width: 765, itemsToShow: 1 },
  { width: 1209, itemsToShow: 1 }
];

const stories = [
  {
    key: '01',
    src: computer,
    title: 'Histoire de Gecko',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint. Velit officia consequat duis enim velit mollit.
      Exercitation veniam consequat sunt nostrud amet.`
  },
  {
    key: '02',
    src: computer,
    title: 'Histoire de Gecko',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint. Velit officia consequat duis enim velit mollit.
      Exercitation veniam consequat sunt nostrud amet.`
  }
];

function History() {
  return (
    <div id='histoire'>
      <Carousel
        breakPoints={breakPoints}
        className='flex w-full h-screen justify-center items-center'>
        {stories.map(story => (
          <div
            key={story.key}
            className={`w-full flex justify-center bg-white p-1 sm:p-4 md:p-5 xl:p-10`}>
            <div className={`flex flex-col md:flex-row w-full min-w-min`}>
              {/* COMPUTER */}
              <div
                className={`md:w-1/2 min-w-min p-2 py-10 md:p-10
                flex justify-center items-center`}>
                <img
                  src={story.src}
                  alt='computer'
                  className={`w-full md:max-w-xl max-w-sm`}
                />
              </div>

              {/* TEXT */}
              <div
                className={`md:w-1/2 inline-flex justify-start items-center px-5 py-10 lg:px-5 z-10`}>
                <div className={`w-full max-w-2xl flex flex-col gap-6`}>
                  <p className='text-2xl xl:text-4xl font-bold tracking-widest hidden lg:block'>
                    {story.title}
                  </p>
                  <p className='text-2xl xl:text-4xl font-bold tracking-widest lg:hidden'>
                    Histoire <br />
                    de Gecko
                  </p>
                  <p className='text-sm tracking-widest text-ellipsis overflow-hidden'>
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default History;
