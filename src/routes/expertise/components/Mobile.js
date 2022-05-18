import React from 'react';
import phone from '../../../assets/expertise/uxphone.png';
import { Button } from '../../../components';

function Mobile() {
  return (
    <>
      <div
        id='mobile'
        className={`w-full h-screen flex bg-green-400
        p-2 xl:p-10 pb-10 -mt-8 lg:-mt-12 xl:-mt-18 pt-0 lg:pt-12 xl:pt-24`}>
        <div
          className={`flex flex-col-reverse md:flex-row w-full justify-center gap-10`}>
          {/* Text */}
          <div
            className={`w-full lg:w-1/2 inline-flex justify-start items-center
            px-5 lg:px-5 text-white`}>
            <div className={`w-full max-w-lg flex flex-col gap-6 z-10`}>
              <p className='text-2xl xl:text-4xl font-bold tracking-widest'>
                App Web / Mobile
              </p>
              <p className='text-sm tracking-widest'>
                Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic
                swag listicle migas mustache cardigan butcher... Lorem ipsum
                dolor amet ex drinking vinegar hoodie shabby chic swag listicle
                migas mustache cardigan butcher... Lorem ipsum dolor amet ex
                drinking
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
              src={phone}
              alt='expertise'
              className={`w-full md:max-w-xl max-w-sm`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
