import { MdPhone, MdAttachMoney } from 'react-icons/md';

const CallToAction = () => {
  return (
    <div className='bg-black text-white py-8'>
      <div className='max-w-screen-lg mx-auto grid grid-cols-1 p-2 md:grid-cols-2 gap-4'>
        {/* Call to Action - Book a 15-min call */}
        <div className='border border-gray-700 p-6 rounded-lg flex flex-col justify-between sm:my-2 sm:mx-4'>
          <h3 className='text-xl font-bold mb-2'>Book a 15-min call</h3>
          <p className='text-gray-400 mb-4'>
            Learn more about how we work and can help you.
          </p>
          <div className='text-[#C4FF65] flex items-center'>
            <MdPhone className='mr-2' />
            <span>Learn More</span>
          </div>
        </div>
        {/* Call to Action - Refer & earn */}
        <div className='border border-gray-700 p-6 rounded-lg flex flex-col justify-between sm:my-2 sm:mx-4'>
          <h3 className='text-xl font-bold mb-2'>Refer & earn</h3>
          <p className='text-gray-400 mb-4'>
            Earn 10% flat commission for each successful referral.
          </p>
          <div className='text-[#C4FF65] flex items-center'>
            <MdAttachMoney className='mr-2' />
            <span>Refer Now</span>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className='mt-8 overflow-hidden'>
        <div className='animate-marquee whitespace-nowrap text-4xl font-bold'>
          <span className=' inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
          <span className='inline-block mr-8'>Kriva Global®</span>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
