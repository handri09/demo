import React from 'react';
import video from '../../../assets/bg_video.png';

function Presentation({ onLoad }) {
  return (
    <div
      id='presentation'
      className={'w-full flex justify-center items-center'}>
      <img
        src={video}
        alt={'video'}
        className={'max-h-screen w-full object-fill'}
        onLoad={onLoad}
      />
    </div>
  );
}

export default Presentation;
