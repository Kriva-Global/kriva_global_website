import { MdArrowOutward } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import data4services from '../constants/data4services.json';
import CallToAction from '../components/global/CallToAction';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
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
          <div className='text-4xl font-bold'>Kriva Global®</div>
        </div>
        <div className='relative flex flex-col md:flex-row items-center justify-center text-white mx-4 md:mx-24 mt-24 space-y-4 md:space-y-0'>
          <div className='w-full md:w-5/5'>
            <p className='text-gray-400 text-xs md:text-sm mb-2'>EVERYWHERE</p>
            <h1 className='text-2xl md:text-4xl font-bold mt-4'>
              Multi-disciplinary design studio, crafting digital experiences &
              more.
            </h1>
          </div>
          <div className='w-full md:w-2/5 flex justify-center items-center'>
            <div className='bg-brand-blue flex justify-center items-center text-white py-2 px-6 rounded-full mt-4'>
              Start a Project <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>

      {/* Media Section */}
      <section className='relative overflow-hidden h-96 md:h-screen'>
        <img
          src='/videoimage.png'
          alt='Video'
          className='w-full h-full object-cover md:h-auto md:relative absolute top-0 left-0'
        />
        <div className='absolute bottom-4 left-4 text-white text-lg'>
          Showreel
        </div>
      </section>

      {/* Our Work Section */}
      <section
        id='our-work'
        className='py-16 px-4 md:px-24  bg-black text-4xl font-bold'
      >
        Our Works®️
      </section>

      {/* hero section  */}
      <div className='get-in-touch-banner bg-scroll-background mt-5'>
        <div className='scrolling-content'>
          <div className='get-in-touch-item'>
            <img
              height={12}
              width={12}
              src='/blue-caution.svg'
              alt='blue logo'
            />
            <span className='get-in-touch-text'>THIS SECTION IS</span>
          </div>
          <div className='get-in-touch-item'>
            <img
              height={12}
              width={12}
              src='/blue-caution.svg'
              alt='blue logo'
            />
            <span className='get-in-touch-text'>UNDER MAINTENANCE</span>
          </div>
        </div>
      </div>
      <section
        id='services'
        className='mt-24 px-4 md:px-24  bg-black text-4xl font-bold'
      >
        Services®️
      </section>
      <div className=' flex flex-col md:flex-row items-center justify-center text-white mx-4 md:mx-24 mt-8 space-y-4 md:space-y-0'>
        {/* Left Image Section */}
        <div className=' h-full md:h-screen lg:h-screen w-full md:w-1/2 lg:w-1/3 flex items-center justify-center'>
          <img
            src='/Solitone.png'
            alt='Brand Identity Image'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Right Content Section */}
        <div className='md:w-1/2 lg:w-2/3 mt-8 md:mt-0 md:ml-8'>
          <h2 className='text-yellow-400 text-left text-xl md:text-2xl lg:text-3xl font-bold mb-4'>
            Brand Identity
          </h2>
          <p className='text-gray-300 mb-4'>
            Brand identity design encompasses all your graphic design decisions
            that define a brand. It includes:
          </p>
          <ul className='list-disc list-inside text-gray-400 space-y-2 text-xs'>
            <li>Company’s Logo</li>
            <li>Colour Palette</li>
            <li>Graphic Elements</li>
            <li>Business cards</li>
            <li>Product packaging and more</li>
          </ul>
          <div className='flex flex-col  justify-center md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4'>
            <div className='bg-brand-blue text-white py-2 px-4 rounded-full flex items-center justify-center'>
              <div className='flex flex-row items-center justify-between '>
                <div className='text-[#C4FF65] text-xs md:text-base  ml-4'>
                  START A PROJECT
                </div>
                <div className='text-xl'>
                  <MdArrowOutward className='text-[#C4FF65]' />
                </div>
                <div className='text-[#C4FF65] text-xs md:text-base  ml-4'>
                  START A PROJECT
                </div>
                <div className='text-xl'>
                  <MdArrowOutward className='text-[#C4FF65] ' />
                </div>
                <div className='text-[#C4FF65] text-xs md:text-base   ml-4'>
                  START A PROJECT
                </div>
                <div className='text-xl'>
                  <MdArrowOutward className='text-[#C4FF65]' />
                </div>
              </div>
            </div>
          </div>
          <ul className='mt-16 space-y-4'>
            {data4services.services.map((service, index) => (
              <div key={index} className='group'>
                <li className='text-xl flex items-center justify-between border-b border-gray-700 pb-2 cursor-pointer group-hover:text-[#C4FF65]'>
                  {service.name}
                  <span className='text-yellow-400 flex items-center group-hover:text-[#C4FF65]'>
                    <ImCross className='text-xs text-white transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#C4FF65]' />
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className='get-in-touch-banner bg-white mt-20'>
        <div className='scrolling-content'>
          <div className='get-in-touch-item'>
            <img height={12} width={12} src='/blue-logo.svg' alt='blue logo' />
            <span className='get-in-touch-text'>GET IN TOUCH</span>
          </div>
          <div className='get-in-touch-item'>
            <img height={12} width={12} src='/blue-logo.svg' alt='blue logo' />
            <span className='get-in-touch-text'>KRIVA GLOBAL</span>
          </div>
        </div>
      </div>
      <section className='mx-4 md:mx-24 mt-20 space-y-4'>
        <div className='text-gray-400 text-xs md:text-sm mb-4'>
          NOT SURE, IF WE'RE A GOOD FIT?
        </div>
      </section>
      <CallToAction />
    </div>
  );
};

export default Home;
