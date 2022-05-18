import React from 'react';
import { Footer } from '../../../components';
import conseil from '../../../assets/expertise/conseil.png';

function Foot() {
  return (
    <>
      <div className='w-full my-10 '>
        <img className='w-full' src={conseil} alt='' />
      </div>
      <Footer />
    </>
  );
}

export default Foot;
