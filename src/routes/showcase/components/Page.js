import React from 'react';
import slide from '../../../assets/contact/slide.png';
import videoDemo from '../../../assets/showcase/video_demo.png';
import conseil from '../../../assets/showcase/conseil.png';
import Footer from '../../../components/Footer';

function Page() {
  return (
    <>
      <div className='flex w-full p-10 my-5'>
        <div className='flex w-full gap-10 p-5'>
          <div className='flex flex-col items-center w-1/2'>
            <p className='text-5xl uppercase text-center'>Solution IA</p>
            <div className='m-10'>
              <img src={videoDemo} alt='' />
            </div>
            <div className='inline-flex flex-col space-y-4 items-center justify-end'>
              <p className='w-80 text-5xl uppercase'>SOLUTION IA</p>
              <p
                className='text-base leading-normal text-black text-opacity-60'
                style={{ width: 519, height: 595 }}>
                Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic
                swag listicle migas mustache cardigan butcher...Lorem ipsum
                dolor amet ex drinking vinegar hoodie shabby chic swag listicle
                migas mustache cardigan butcher...Lorem ipsum dolor amet ex
                drinking vinegar hoodie shabby chic swag listicle migas mustache
                cardigan butcher...Lorem ipsum dolor amet ex drinking vinegar
                hoodie shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan butcher...
                <br />
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic
                swag listicle migas mustache cardigan butcher...Lorem ipsum
                dolor amet ex drinking vinegar hoodie shabby chic swag listicle
                migas mustache cardigan butcher...Lorem ipsum dolor amet ex
                drinking vinegar hoodie shabby chic swag listicle migas mustache
                cardigan butcher...Lorem ipsum dolor amet ex drinking vinegar
                hoodie shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan butcher...
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center w-1/2 '>
            <p className='text-5xl uppercase text-center'>SOLUTION GECKOS</p>
            <div className='m-10'>
              <img src={videoDemo} alt='' />
            </div>
            <div className='inline-flex flex-col space-y-4 items-center justify-end'>
              <p className='text-5xl uppercase' style={{ width: 435 }}>
                SOLUTION GECKOS
              </p>
              <p
                className='text-base leading-normal text-black text-opacity-60'
                style={{ width: 519, height: 595 }}>
                Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic
                swag listicle migas mustache cardigan butcher...Lorem ipsum
                dolor amet ex drinking vinegar hoodie shabby chic swag listicle
                migas mustache cardigan butcher...Lorem ipsum dolor amet ex
                drinking vinegar hoodie shabby chic swag listicle migas mustache
                cardigan butcher...Lorem ipsum dolor amet ex drinking vinegar
                hoodie shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan butcher...
                <br />
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum dolor amet ex drinking vinegar hoodie shabby chic
                swag listicle migas mustache cardigan butcher...Lorem ipsum
                dolor amet ex drinking vinegar hoodie shabby chic swag listicle
                migas mustache cardigan butcher...Lorem ipsum dolor amet ex
                drinking vinegar hoodie shabby chic swag listicle migas mustache
                cardigan butcher...Lorem ipsum dolor amet ex drinking vinegar
                hoodie shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan
                butcher...Lorem ipsum dolor amet ex drinking vinegar hoodie
                shabby chic swag listicle migas mustache cardigan butcher...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex my-10'>
        <img className='w-full' src={conseil} alt='' />
      </div>
      <Footer />
      <div className='fixed bottom-0 right-0 m-5'>
        <img src={slide} alt='' />
      </div>
    </>
  );
}

export default Page;
