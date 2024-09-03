const OurWorks = () => {
  return (
    <>
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
    </>
  );
};
export default OurWorks;
