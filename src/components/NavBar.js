import React from 'react';
import CustomLink from './CustomLink';
import logo from '../assets/logo.gif';
import logoDark from '../assets/logo_dark.gif';
import { Outlet } from 'react-router-dom';

function NavBar(props) {
  const { darkMode } = props;
  const [state, setSate] = React.useState({
    menuOpened: false
  });

  const toggleMenu = () => {
    setSate({
      ...state,
      menuOpened: !state.menuOpened
    });
  };

  return (
    <>
      <div className={`w-full text-gray-700 bg-white sticky top-0 z-30`}>
        <div className='flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 z-100'>
          <div className='flex flex-row items-center justify-between p-2'>
            <a href='/' className='tracking-widest text-gray-900'>
              <img
                src={darkMode ? logoDark : logo}
                alt='GECKOS'
                className={'h-10 md:h-14  md:w-14'}
              />
            </a>

            <button
              onClick={toggleMenu}
              className='rounded-lg md:hidden focus:outline-none focus:shadow-outline'>
              <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
                {!state.menuOpened ? (
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                    clipRule='evenodd'></path>
                ) : (
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                )}
              </svg>
            </button>
          </div>

          <nav
            className={`flex-col items-center gap-5 flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row uppercase ${
              state.menuOpened ? 'flex' : 'hidden'
            }`}>
            {[
              ['À propos', '/'],
              ['Expertise', '/expertise'],
              ['Contact', '/contact']
            ].map(([title, url]) => (
              <CustomLink
                key={title}
                to={url}
                onClick={() => {
                  setSate({ ...state, menuOpened: false });
                }}>
                {title}
              </CustomLink>
            ))}
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
