import React from 'react';
import { SolutionsPage, Videos } from './components';
import video from '../../assets/bg_video.png';
import { Footer } from '../../components';
import slide from '../../assets/contact/slide.png';
import conseil from '../../assets/expertise/conseil.png';

function Solutions() {
  return (
    <>
      <SolutionsPage />
      <div className='flex justify-end fixed bottom-0 right-0 left-0 m-10'>
        <img src={slide} alt='' />
      </div>
      <div className={'w-full'}>
        <img
          src={video}
          alt={'video'}
          className={'max-h-screen w-full object-fill'}
        />
      </div>
      <Videos />
      <div className='w-full my-10 '>
        <img className='w-full' src={conseil} alt='' />
      </div>
      <Footer />
    </>
  );
}

export default Solutions;
