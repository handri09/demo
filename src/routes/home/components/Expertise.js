import React from 'react';
import expertise from '../../../assets/home/3B_.png';
import { Button } from '../../../components';
import { Link } from 'react-router-dom';

function Expertise() {
  return (
    <>
      <div
        id='expertise'
        className={`flex h-full xl:h-screen flex-col lg:flex-row w-full bg-green-400 -mt-10`}>
        {/** -mt-8 lg:-mt-12 xl:-mt-24 pt-14 lg:pt-12 xl:pt-0 */}
        {/* TEXT */}
        <div
          className={`w-full lg:w-1/2 flex items-center justify-center px-5 pb-10 z-10`}>
          <div className={`w-full max-w-lg flex flex-col gap-6 text-white`}>
            <p className='text-2xl xl:text-4xl font-bold tracking-widest'>
              Expertise
            </p>
            <p className='text-sm tracking-widest'>
              Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic swag
              listicle migas mustache cardigan butcher... Lorem ipsum dolor amet
              ex drinking vinegar hoodie shabby chic swag listicle migas
              mustache cardigan butcher... Lorem ipsum dolor amet ex drinking
            </p>
            <div className='flex w-full justify-start pl-20 items-center mt-3 md:mt-10'>
              <Link to='/expertise'>
                <Button color='white'>découvrir</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* PICTURE */}
        <div className='flex justify-center items-center w-full lg:w-1/2 text-sm sm:text-xl'>
          <div className='relative overflow-x-clip'>
            <img
              src={expertise}
              alt='expertise'
              className='scale-125'
              style={{ maxHeight: '80vh', minWidth: '300px' }}
            />
            <a href='/expertise#data'>
              <h1
                className='absolute hover:text-green-500 hover:border-b-green-500 border-b'
                style={{ top: '21%', left: '14%' }}>
                Data
                <br />
                intelligence
                <br />& Robotique
              </h1>
            </a>
            <a href='/expertise#animation'>
              <h1
                className='absolute hover:text-green-500 hover:border-b-green-500 hover:border-b'
                style={{ top: '21%', right: '12%' }}>
                Animation
                <br />
                2D/3D
              </h1>
            </a>
            <a href='/expertise#mobile'>
              <h1
                className='absolute hover:text-green-500 hover:border-b-green-500 hover:border-b'
                style={{ bottom: '26%', left: '14%' }}>
                App Web
                <br />
                Mobile
              </h1>
            </a>
            <a href='/expertise#design'>
              <h1
                className='absolute hover:text-green-500 hover:border-b-green-500 hover:border-b'
                style={{ bottom: '26%', right: '17%' }}>
                UX / UI
                <br />
                Design
              </h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
