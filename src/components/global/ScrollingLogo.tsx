const ScrollingLogo: React.FC<{
  color: string;
}> = ({ color }) => {
  return (
    <div className={`mt-8 overflow-hidden text-[${color}]`}>
      <div className='animate-marquee whitespace-nowrap text-4xl font-normal font-montreal text-[56px] leading-[67.2px]'>
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
  );
};
export default ScrollingLogo;
