import React from 'react';
import rectangle from '../../../../assets/home/Rectangle.png';

function Actuality() {
  return (
    <>
      <div
        id='actualite'
        className={`w-full lg:h-screen bg-blue-400 -mt-10 md:-mt-14
          flex justify-center items-center`}>
        <div className='flex justify-center items-center w-full'>
          <div className='flex flex-col w-full h-full'>
            <div className='w-full'>
              <div
                className={`flex justify-center items-center text-2xl xl:text-4xl font-bold tracking-widest text-white py-5 pt-10`}>
                <h1 className='z-20'>Dernière Actualités</h1>
              </div>
            </div>
            <div className='w-full bg-blue-400'>
              <div className='w-full flex justify-center items-center p-10'>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20`}>
                  <div className='inline-flex flex-col gap-5 max-w-lg'>
                    <img className='rounded-sm' src={rectangle} alt='' />
                    <h1
                      className={`text-xl xl:text-2xl font-bold tracking-widest text-white`}>
                      Article 1
                    </h1>
                    <p className='text-sm tracking-widest text-justify text-white'>
                      minim mollit non deserunt ullamco est sit aliqua sint
                      sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt nostrud.
                    </p>
                  </div>
                  <div className='inline-flex flex-col gap-5 max-w-lg'>
                    <img className='rounded-sm' src={rectangle} alt='' />
                    <h1
                      className={`text-xl xl:text-2xl font-bold tracking-widest text-white`}>
                      Article 2
                    </h1>
                    <p className='text-sm tracking-widest text-justify text-white'>
                      minim mollit non deserunt ullamco est sit aliqua dolor
                      sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt nostrud.
                    </p>
                  </div>
                  <div className='inline-flex flex-col gap-5 max-w-lg'>
                    <img className='rounded-sm' src={rectangle} alt='' />
                    <h1
                      className={`text-xl xl:text-2xl font-bold tracking-widest text-white`}>
                      Article 3
                    </h1>
                    <p className='text-sm tracking-widest text-justify text-white'>
                      minim mollit non deserunt ullamco est sit aliqua dolor
                      sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt nostrud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Actuality;
