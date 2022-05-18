import React from 'react';
import { Design, Mobile, Data, Animation, Solution } from './components';
import mp from '../../assets/MP.png';
import { Footer } from '../../components';
import { Link } from 'react-scroll';

function Expertise() {
  return (
    <>
      <div className='hidden md:flex sticky top-16 md:justify-center gap-7 md:items-center w-full h-10 z-30 bg-white'>
        <Link
          to='design'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='hover:border-b-green-400 hover:border-b'>
          UI/UX design
        </Link>
        <Link
          to='mobile'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='hover:border-b-green-400 hover:border-b'>
          Application web et mobile
        </Link>
        <Link
          to='data'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='hover:border-b-green-400 hover:border-b'>
          Data Intelligence & robotique
        </Link>
        <Link
          to='animation'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='hover:border-b-green-400 hover:border-b'>
          Animation 2D/3D
        </Link>
        <Link
          to='solution'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='hover:border-b-green-400 hover:border-b'>
          Conseils & Solution
        </Link>
      </div>
      <img className='fixed bottom-0 right-0 m-10 z-30' src={mp} alt='' />
      <Design />
      <div className='w-full h-14 lg:h-24 xl:h-38 -skew-y-1 bg-green-400 -mt-10'></div>
      <Mobile />
      <div className='w-full h-14 md:h-20 lg:h-24 xl:h-38 skew-y-1 bg-green-400 -mt-10 md:-mt-18'></div>
      <Data />
      <div className='w-full h-14 lg:h-24 xl:h-48 -skew-y-1 bg-white -mt-20 '></div>
      <Animation />
      <div className='w-full h-14 md:h-20 lg:h-24 xl:h-38 xl2:h-44 skew-y-1 bg-blue-400 -mt-10 md:-mt-20'></div>
      <Solution />
      <Footer />
    </>
  );
}

export default Expertise;
