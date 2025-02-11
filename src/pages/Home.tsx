import CallToAction from '../components/global/CallToAction';
import CustomVideo from '../components/global/CustomVideo';
import GetInTouch from '../components/global/GetInTouch';
import OurWorks from '../components/global/OurWorks';
import Services from '../components/global/Services';
import ScrollingLogo from '../components/global/ScrollingLogo';
import StartProjectBtn from '../components/global/StartProjectBtn';

const Home = () => {
  return (
    <div className='overflow-x-hidden font-montreal'>
      {/* Header Section */}
      <div
        id='home'
        className='flex items-center justify-center h-screen overflow-hidden bg-black '
      >
        <div className='absolute inset-0 flex items-center justify-center'>
          <img
            src='/backgroundglove.png'
            alt='Globe Logo'
            className='w-full md:w-2/3 lg:w-1/2 h-auto object-cover opacity-10'
          />
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <ScrollingLogo color='#C4FF65' />
        </div>
        <div className='relative flex flex-col md:flex-row items-center justify-center text-white mx-4 md:mx-24 mt-24 space-y-4 md:space-y-0'>
          <div className='w-full md:w-5/5'>
            <p className='text-gray-400 text-xs md:text-sm mb-2'>EVERYWHERE</p>
            <h1 className='text-2xl md:text-4xl font-bold mt-4'>
              Multi-disciplinary design studio, crafting digital experiences &
              more.
            </h1>
          </div>
          <StartProjectBtn />
        </div>
      </div>

      {/* Media Section */}
      <CustomVideo />
      <OurWorks />
      <Services />
      <GetInTouch />
      <CallToAction />
    </div>
  );
};

export default Home;
