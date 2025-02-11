const ScrollingLogo: React.FC<{ color: string }> = ({ color }) => {
  
  return (
    <div className={`flex flex-row w-full items-center mt-8 overflow-hidden text-[${color}] group`}>
    <div className='animate-loop-scroll whitespace-nowrap text-4xl font-normal font-montreal text-[56px] flex items-center group-hover:animate-pause'>
      <span className='inline-block mr-8'>Kriva Global®</span>
      <span className='inline-block mr-8'>Kriva Global®</span>
      <span className='inline-block mr-8'>Kriva Global®</span>
      <span className='inline-block mr-8'>Kriva Global®</span>
    </div>
    <div className='animate-loop-scroll whitespace-nowrap text-4xl font-normal font-montreal text-[56px] flex items-center aria-hidden="true" group-hover:animate-pause'>
      <span className='inline-block mr-8'>Kriva Global®</span>
      <span className='inline-block mr-8'>Kriva Global®</span>
      <span className='inline-block mr-8'>Kriva Global®</span>
      <span className='inline-block mr-8'>Kriva Global®</span>
    </div>
  </div>
  
  );
};

export default ScrollingLogo;
