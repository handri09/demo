import React from 'react';
// import {Link} from "react-router-dom"
import Link from '../../../components/CustomLink';

function Nav() {
  return (
    <>
      <div className='flex sticky top-16 justify-center gap-7 items-center w-full h-10 z-30 bg-white'>
        <Link to='/solutions/form'>Geckos Form</Link>
        <Link to='/solutions/recommend'>Geckos Recommend</Link>
        <Link to='/solutions/bot'>Geckos Bot</Link>
        <Link to='/solutions/motion'>Geckos Motion</Link>
      </div>
    </>
  );
}

export default Nav;
