import { ImCross } from 'react-icons/im';
import data4services from '../../constants/data4services.json';
import StartProjectBtn from './StartProjectBtn';

const Services = () => {
  return (
    <>
      <section
        id='services'
        className='mt-24 px-4 md:px-24  bg-black text-4xl font-bold'
      >
        Services®️
      </section>
      <div className=' flex  flex-col md:flex-row items-center justify-center text-white mx-4 md:mx-24 mt-8 space-y-4 md:space-y-0 mb-12'>
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
            <StartProjectBtn width='300px' />
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
    </>
  );
};
export default Services;
