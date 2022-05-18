import Lottie from 'lottie-react';
import logo from '../../../assets/logo.json';

function Loader() {
  return (
    <div className={'w-full h-screen flex justify-center items-center'}>
      <Lottie animationData={logo} style={{ height: 300, width: 300 }} />
    </div>
  );
}

export default Loader;
