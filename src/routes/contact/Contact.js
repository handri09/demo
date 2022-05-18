import React from 'react';
import Form from './components/Form';
import mascotte from '../../assets/contact/Contact_mascotte.png';
import { Footer } from '../../components';
import { Icon } from '@iconify/react';

function Contact(props) {
  return (
    <>
      <div className='w-full flex p-2 lg:p-10 pb-20 '>
        <div className='w-full flex flex-col-reverse lg:flex-row items-start min-w-min'>
          <div className='w-full lg:w-1/2 flex justify-center items-center mt-10 md:mt-0'>
            <Form />
          </div>

          <div className='w-full lg:w-1/2 flex flex-col justify-center items-start'>
            <div className='w-full flex flex-col md:flex-row gap-10 md:gap-10 md:pb-10 px-5 lg:px-16'>
              <div className='w-full md:w-1/2 flex flex-col'>
                <div className='w-full flex mb-16'>
                  <Icon
                    icon='ep:message'
                    style={{ fontSize: '30px' }}
                    className='stroke-2 text-green-800 mr-2'
                  />
                  <p className='text-xl tracking-widest'>hello@geckos.com</p>
                </div>
                <div>
                  <p className='text-xl leading-normal mb-3 lg:mb-5'>Québec</p>
                  <p className='text-xl leading-normal'>
                    dsdqsfsdfsqfsqfqsfqs fgsdfgsdfgdfgdsfg fgdgsdfgdfgsdfgfg gf
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <div className='w-full flex mb-16'>
                  <Icon
                    icon='akar-icons:phone'
                    style={{ fontSize: '30px' }}
                    className='stroke-2 text-green-800 mr-2'
                  />
                  <p className='text-xl tracking-widest'>0201-486-4544</p>
                </div>
                <div>
                  <p className='text-xl leading-normal mb-3 lg:mb-5'>
                    Madagascar
                  </p>
                  <p className='text-xl leading-normal'>
                    dsdqsfsdfsqfsqfqsfqs fgsdfgsdfgdfgdsfg fgdgsdfgdfgsdfgfg gf
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full hidden lg:flex justify-center items-baseline'>
              <img src={mascotte} alt='mascotte' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
