import React from 'react';
import simon from '../../../assets/expertise/Simon.png';
import { Button } from '../../../components';

function Animation() {
  return (
    <>
      <div
        id='animation'
        className={`w-full h-screen flex bg-blue-400
          pb-10 p-2 xl:p-10
          -mt-8 lg:-mt-12 xl:-mt-24 pt-14 lg:pt-12 xl:pt-24`}>
        <div className={`flex flex-col-reverse md:flex-row w-full`}>
          {/* Text */}
          <div
            className={`w-full lg:w-1/2 inline-flex justify-start items-center
            px-5 lg:px-5 text-white`}>
            <div className={`w-full max-w-lg flex flex-col gap-6`}>
              <p className='text-2xl xl:text-4xl font-bold tracking-widest'>
                Animation 2D/3D
              </p>
              <p className='text-sm tracking-widest'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolordo
                amet sint.Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className='flex w-full justify-start pl-10 lg:pl-20 items-center mt-3 md:mt-10'>
                <Button color='white'>réalisations</Button>
              </div>
            </div>
          </div>

          {/* PICTURE */}
          <div
            className={`w-full flex justify-center items-center lg:w-1/2 p-5`}>
            <img
              src={simon}
              alt='simon'
              className={`w-full md:max-w-xl max-w-sm`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Animation;
