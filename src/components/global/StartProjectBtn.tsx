import { MdArrowOutward } from 'react-icons/md';

const StartProjectBtn: React.FC = () => {
  return (
    <button
          type='submit'
          className='w-full md:w-auto btn-primary flex items-center overflow-hidden relative group'
          style={{ width: '300px' , height: '50px' }} // Adjust the width and height as needed
        >
          <div className='flex flex-row overflow-hidden group-hover:paused'>
          <div className='animate-loop-scroll whitespace-nowrap group-hover:paused'>
            <span className='flex items-center space-x-4'>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>START A PROJECT</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>START A PROJECT</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>START A PROJECT</span>
              </span>
            </span>
          </div>
          <div className='animate-loop-scroll whitespace-nowrap group-hover:paused' aria-hidden="true">
            <span className='flex items-center space-x-4'>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>START A PROJECT</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>START A PROJECT</span>
              </span>
              <span className='flex items-center'>
                <MdArrowOutward className='text-[#C4FF65]' />
                <span className='ml-2'>START A PROJECT</span>
              </span>
            </span>
          </div>
          </div>
        </button>
  );
};
export default StartProjectBtn;
