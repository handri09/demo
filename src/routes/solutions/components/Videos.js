import React from 'react';
import video from '../../../assets/solutions/video_demos.png';
import Video from './Video';

function Videos() {
  return (
    <>
      <div className='flex flex-col w-full gap-5 my-5'>
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className='flex w-screen justify-center items-center gap-10'>
            {[0, 1, 2, 3].map(j => (
              <Video key={j} videoDemos={video} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Videos;
