import React from 'react';
import {
  Loader,
  History,
  Expertise,
  Solutions,
  Actuality,
  Presentation
} from './components';
import { Footer } from '../../components';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

const pages = [
  'presentation',
  'histoire',
  'expertise',
  'solution',
  'actualite'
];

function Home(props) {
  const [Flip, setFlip] = React.useState(false);
  const [next, setNext] = React.useState(1);
  const [state, setState] = React.useState({
    loading: true
  });

  const onLoad = () => {
    setState({
      ...state,
      loading: false
    });
  };

  return (
    <>
      {state.loading ? <Loader /> : null}
      <Presentation onLoad={onLoad} />
      <Link
        to={pages[next]}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className='hover:border-b-green-400 hover:border-b'>
        <Icon
          icon='iconoir:mouse-scroll-wheel'
          style={{ fontSize: '50px' }}
          className={`fixed bottom-20 left-1/2 stroke-2 text-gray-300 hover:text-green-400 z-20`}
          onMouseEnter={() => setFlip(true)}
          onMouseLeave={() => setFlip(false)}
          vFlip={Flip}
          onClick={() =>
            setNext(n => {
              if (n > 3) {
                return 1;
              } else {
                return n + 1;
              }
            })
          }
        />
      </Link>
      <History />
      <div className='w-full h-16 lg:h-24 xl:h-38 -skew-y-1 bg-green-400'></div>
      <Expertise />
      <div className='w-full h-16 md:h-20 lg:h-24 xl:h-38 skew-y-1 bg-white -mt-10 md:-mt-10 xl:-mt-10'></div>
      <Solutions />
      <div className='w-full h-16 md:h-20 lg:h-24 xl:h-40 -skew-y-1 bg-blue-400 -mt-10'></div>
      <Actuality />
      <Footer />
    </>
  );
}

export default Home;
