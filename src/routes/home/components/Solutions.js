import React from 'react';
import { Link } from 'react-router-dom';
import block1 from '../../../assets/home/expertise_bloc_1.png';
import block2 from '../../../assets/home/expertise_bloc_2.png';
import block3 from '../../../assets/home/expertise_bloc_3.png';
import block4 from '../../../assets/home/expertise_bloc_4.png';

function Solutions() {
  return (
    <div
      id='solution'
      className=' flex w-full lg:h-screen justify-center items-center pb-10'>
      {/** -mt-8 lg:-mt-12 xl:-mt-24 */}
      <div className='flex w-full justify-center items-center min-h-min'>
        <div className={`w-full flex flex-col justify-center items-center`}>
          {/* SOLUTIONS */}
          <div className={`flex justify-center items-end`}>
            <div className={`my-5 max-w-screen-md px-5 pb-1 lg:px-5 `}>
              <h1
                className={`my-3 ml-1 text-center text-2xl xl:text-4xl font-bold tracking-widest`}>
                Solutions
              </h1>
              <p className={`text-sm xl:text-md tracking-widest`}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          {/** Picture */}
          <div className='p-5'>
            <div className={`flex justify-center items-center`}>
              <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-10 xl:gap-20'>
                <Link to='/#'>
                  <img
                    className='hover:opacity-80 hover:shadow-lg border-4 border-transparent rounded-md hover:border-white'
                    src={block1}
                    alt='block1'
                  />
                </Link>
                <Link to='/#'>
                  <img
                    className='hover:opacity-80 hover:shadow-lg border-4 border-transparent rounded-md hover:border-white'
                    src={block2}
                    alt='block2'
                  />
                </Link>
                <Link to='/#'>
                  <img
                    className='hover:opacity-80 hover:shadow-lg border-4 border-transparent rounded-md hover:border-white'
                    src={block3}
                    alt='block3'
                  />
                </Link>
                <Link to='/#'>
                  <img
                    className='hover:opacity-80 hover:shadow-lg border-4 border-transparent rounded-md hover:border-white'
                    src={block4}
                    alt='block4'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
