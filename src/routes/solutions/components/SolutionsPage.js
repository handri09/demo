import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/home/bg_expertise.png';
import block1 from '../../../assets/home/expertise_bloc_1.png';
import block2 from '../../../assets/home/expertise_bloc_2.png';
import block3 from '../../../assets/home/expertise_bloc_3.png';
import block4 from '../../../assets/home/expertise_bloc_4.png';

function Solutions() {
  return (
    <div
      className={`flex flex-col w-screen h-screen`}
      style={{ backgroundImage: `url("${bg}")` }}>
      {/* SOLUTIONS */}
      <div className={`h-2/5 flex justify-center items-end mb-10`}>
        <h1 className='text-4xl my-5 ml-1'>SOLUTIONS</h1>
      </div>

      {/* PICTURE */}
      <div className={`h-3/5 flex justify-center items-center mb-20`}>
        <div className='flex flex-col space-y-5 md:space-x-5 lg:space-x-5 md:flex-row lg:flex-row md:space-y-0 lg:space-y-0'>
          <Link to='/solutions/form'>
            <img
              className='hover:opacity-80 hover:shadow-lg border-4 border-transparent rounded-md hover:border-white'
              src={block1}
              alt='block1'
            />
          </Link>
          <Link to='/solutions/recommend'>
            <img
              className='hover:opacity-80 hover:shadow-lg border-4 border-transparent rounded-md hover:border-white'
              src={block2}
              alt='block2'
            />
          </Link>
          <Link to='/solutions/bot'>
            <img
              className='hover:opacity-80 hover:shadow-lg border-4 border-transparent rounded-md hover:border-white'
              src={block3}
              alt='block3'
            />
          </Link>
          <Link to='/solutions/motion'>
            <img
              className='hover:opacity-80 hover:shadow-lg border-4 border-transparent rounded-md hover:border-white'
              src={block4}
              alt='block4'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
