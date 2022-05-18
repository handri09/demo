import React from 'react';
import ux from '../../../assets/expertise/uxhand1.png';
import { Button } from '../../../components';

function Design() {
  return (
    <div
      id='design'
      className={`w-full h-screen flex
        pb-20 p-2 xl:p-10 `}>
      <div className={`w-full flex flex-col md:flex-row min-w-min pb-10`}>
        {/* Picture */}
        <div
          className={`w-full md:w-1/2 min-w-min flex justify-center items-center`}>
          <img
            src={ux}
            alt='UI/UX Design'
            className={`w-full md:max-w-xl max-w-sm scale-110 md:scale-100`}
          />
        </div>

        {/* Text */}
        <div
          className={`md:w-1/2 inline-flex justify-start items-center 
          px-5 lg:px-5 z-10`}>
          <div className={`w-full max-w-lg flex flex-col gap-6`}>
            <p className='text-2xl xl:text-4xl font-bold tracking-widest'>
              UX / UI Design
            </p>
            <p className='text-sm tracking-widest'>
              Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic swag
              listicle migas mustache cardigan butcher...
            </p>
            <div className='flex w-full justify-start pl-10 lg:pl-20 items-center mt-3 md:mt-10'>
              <Button>réalisations</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
