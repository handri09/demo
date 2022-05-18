import React from 'react';
import solution from '../../../assets/expertise/solution.png';
import { Button } from '../../../components';

function Solution() {
  return (
    <>
      <div
        id='solution'
        className={`w-full h-screen flex bg-gradient-to-b from-pink-300 to-blue-300
          pb-10 pt-14 lg:pt-12 xl:pt-18
          -mt-8 lg:-mt-10 xl:-mt-18 xl2:-mt-28 `}>
        <div className='w-full flex justify-center items-center'>
          <div className={`w-full flex flex-col md:flex-row min-w-min`}>
            {/* Picture */}
            <div
              className={`w-full md:w-1/2 min-w-min 
              flex justify-center items-center`}>
              <img
                src={solution}
                alt='solutions'
                className={`w-full md:max-w-xl max-w-sm -mt-14 lg:-mt-14 xl:-mt-44`}
              />
            </div>

            {/* Text */}
            <div
              className={`md:w-1/2 inline-flex justify-start items-center
              px-5 lg:px-5 z-10`}>
              <div className={`w-full max-w-lg flex flex-col gap-6`}>
                <p className='text-2xl xl:text-4xl font-bold tracking-widest'>
                  Conseils et Solutions
                </p>
                <p className='text-sm tracking-widest'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className='flex w-full justify-start pl-10 lg:pl-20 items-center mt-3 md:mt-10'>
                  <Button>réalisations</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solution;
