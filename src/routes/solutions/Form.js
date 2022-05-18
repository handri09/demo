import React from 'react';
import { Nav, Foot } from './components';
import video from '../../assets/solutions/form1.png';
import gf from '../../assets/solutions/bg_geckosform.png';
import frame1 from '../../assets/solutions/Frame 6.png';
import frame5 from '../../assets/solutions/Frame 5.png';

function Form() {
  return (
    <>
      <Nav />

      <div className='flex w-screen h-screen'>
        <img className='w-full' src={video} alt='' />
      </div>

      <div className='flex w-screen h-screen'>
        <div className='flex justify-center items-center w-1/2'>
          <div
            className='inline-flex flex-col space-y-4 items-center justify-end'
            style={{ width: 458, height: 344 }}>
            <p
              className='text-5xl text-green-400 uppercase'
              style={{ width: 392 }}>
              Geckos form
            </p>
            <p
              className='text-base leading-normal text-black text-opacity-60'
              style={{ width: 458, height: 273 }}>
              Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic swag
              listicle migas mustache cardigan butcher...Lorem ipsum dolor amet
              ex drinking vinegar hoodie shabby chic swag listicle migas
              mustache cardigan butcher...Lorem ipsum dolor amet ex drinking
              vinegar hoodie shabby chic swag listicle migas mustache cardigan
              butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie shabby
              chic swag listicle migas mustache cardigan butcher...Lorem ipsum
              dolor amet ex drinking vinegar hoodie shabby chic swag listicle
              migas mustache cardigan butcher...
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className='flex justify-end items-center w-1/2'>
          <img src={gf} className='h-full' alt='' />
        </div>
      </div>

      <div className='flex w-full h-screen'>
        <div className='flex justify-start items-center w-1/2'>
          <img src={frame1} alt='' />
        </div>

        <div className='flex justify-start items-center w-1/2'>
          <div
            className='inline-flex flex-col space-y-4 items-center justify-end'
            style={{ width: 574, height: 283 }}>
            <p className='w-96 text-5xl text-green-400 uppercase'>
              Geckos form
            </p>
            <p
              className='text-base leading-normal text-black text-opacity-60'
              style={{ width: 574, height: 212 }}>
              Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic swag
              listicle migas mustache cardigan butcher...Lorem ipsum dolor amet
              ex drinking vinegar hoodie shabby chic swag listicle migas
              mustache cardigan butcher...Lorem ipsum dolor amet ex drinking
              vinegar hoodie shabby chic swag listicle migas mustache cardigan
              butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie shabby
              chic swag listicle migas mustache cardigan butcher...Lorem ipsum
              dolor amet ex drinking vinegar hoodie shabby chic swag listicle
              migas mustache cardigan butcher...
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className='flex w-full h-screen'>
        <div className='flex justify-center items-center w-1/2'>
          <div
            className='inline-flex flex-col space-y-4 items-center justify-end'
            style={{ width: 574, height: 283 }}>
            <p className='w-96 text-5xl text-green-400 uppercase'>
              Geckos form
            </p>
            <p
              className='text-base leading-normal text-black text-opacity-60'
              style={{ width: 574, height: 212 }}>
              Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic swag
              listicle migas mustache cardigan butcher...Lorem ipsum dolor amet
              ex drinking vinegar hoodie shabby chic swag listicle migas
              mustache cardigan butcher...Lorem ipsum dolor amet ex drinking
              vinegar hoodie shabby chic swag listicle migas mustache cardigan
              butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie shabby
              chic swag listicle migas mustache cardigan butcher...Lorem ipsum
              dolor amet ex drinking vinegar hoodie shabby chic swag listicle
              migas mustache cardigan butcher...
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className='flex justify-end items-center w-1/2'>
          <img src={frame5} alt='' />
        </div>
      </div>

      <Foot />
    </>
  );
}

export default Form;
