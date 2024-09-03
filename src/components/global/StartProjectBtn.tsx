import { MdArrowOutward } from 'react-icons/md';

const StartProjectBtn: React.FC<{ width: string }> = ({ width }) => {
  return (
    <button
      type='submit'
      className={`w-full md:w-auto btn-primary flex items-center overflow-hidden relative `}
      style={{
        width: width,
      }}
    >
      <div className='animate-marquee whitespace-nowrap'>
        <span className='flex items-center space-x-4'>
          <span className='flex items-center'>
            <MdArrowOutward className='text-[#C4FF65]' />
            <span className='ml-2'>Start a Project</span>
          </span>
          <span className='flex items-center'>
            <MdArrowOutward className='text-[#C4FF65]' />
            <span className='ml-2'>Start a Project</span>
          </span>
          <span className='flex items-center'>
            <MdArrowOutward className='text-[#C4FF65]' />
            <span className='ml-2'>Start a Project</span>
          </span>
          <span className='flex items-center'>
            <MdArrowOutward className='text-[#C4FF65]' />
            <span className='ml-2'>Start a Project</span>
          </span>
          <span className='flex items-center'>
            <MdArrowOutward className='text-[#C4FF65]' />
            <span className='ml-2'>Start a Project</span>
          </span>
          <span className='flex items-center'>
            <MdArrowOutward className='text-[#C4FF65]' />
            <span className='ml-2'>Start a Project</span>
          </span>
          <span className='flex items-center'>
            <MdArrowOutward className='text-[#C4FF65]' />
            <span className='ml-2'>Start a Project</span>
          </span>
        </span>
      </div>
    </button>
  );
};
export default StartProjectBtn;
