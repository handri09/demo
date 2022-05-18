import React from 'react';
import computer from '../../../assets/expertise/data_computer.png';
import { Button } from '../../../components';

function Data() {
  return (
    <div
      id='data'
      className={`w-full h-screen flex bg-white p-2 xl:p-10 
        -mt-8 lg:-mt-12 xl:-mt-0 py-14 md:py-36 xl:py-20 xl:pt-52`}>
      <div className={`w-full flex flex-col md:flex-row min-w-min `}>
        {/* Picture */}
        <div
          className={`w-full md:w-1/2 min-w-min
          flex justify-center items-center`}>
          <img
            src={computer}
            alt='computer'
            className={`w-full md:max-w-xl max-w-sm`}
          />
        </div>

        {/* Text */}
        <div
          className={`md:w-1/2 inline-flex justify-start items-center
          px-5 lg:px-5 z-10`}>
          <div className={`w-full max-w-lg flex flex-col gap-6`}>
            <p className='text-4xl font-bold tracking-widest'>
              Data intelligence & robotique
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

export default Data;
