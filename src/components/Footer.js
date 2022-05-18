import footerD from '../assets/home_footer_mada.png';
import footerM from '../assets/footer_mobile.png';
import footerT from '../assets/home_footer_mada_tablet.png';

function Footer() {
  return (
    <>
      <div className={`w-full hidden lg:block`}>
        <img src={footerD} alt='' className='w-full' />
      </div>
      <div className={`w-full md:hidden`}>
        <img src={footerM} alt='' className='w-full' />
      </div>
      <div className={`w-full hidden md:block lg:hidden`}>
        <img src={footerT} alt='' className='w-full' />
      </div>
    </>
  );
}

export default Footer;
