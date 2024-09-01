

const QuickcallnDRef
  = () => {
    return (
      <div>
        <section className='mx-4 md:mx-24 mt-20 space-y-4'>
          <div className='text-gray-400 text-xs md:text-sm mb-4'>
            NOT SURE, IF WE'RE A GOOD FIT?
          </div>
          <div className='flex flex-row md:flex-row items-center justify-center text-white mx-4 md:mx-0 space-y-4 md:space-y-0'>
            <div className='flex flex-col border border-gray-700 p-4 w-full mr-6 md:w-[500px] h-[100px] rounded-lg flex justify-center items-start mt-4 md:mt-0'>
              <div className='flex flex-col w-full text-left'>
                <div className='flex flex-row items-center justify-between'>
                  <p className='text-base md:text-xl'>Book a 15-min call</p>
                  <img src='/book-a-call.svg' alt='book a call' className='h-5 ml-2' />
                </div>
                <p className='text-xs md:text-base text-gray-400'>Get to know how we work and can help you</p>
              </div>
            </div>
            <div className='flex flex-col border border-gray-700 p-4 w-full md:w-[500px] h-[100px] rounded-lg flex justify-center items-start'>
              <div className='flex flex-col w-full text-left'>
                <div className='flex flex-row items-center justify-between'>
                  <p className='text-base md:text-xl'>Refer & earn</p>
                  <img src='/refer-&-earn.svg' alt='refer&eran' className='h-7 ml-2' />
                </div>
                <p className='text-xs md:text-base text-gray-400'>Earn 10% flat commission for each successful referral</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full p-28 flex items-center justify-center overflow-hidden">
          <div className="flex flex-row text-center text-4xl font-bold">
            Kriva Global®
          </div>
        </section>
      </div>
    )
  }

export default QuickcallnDRef
