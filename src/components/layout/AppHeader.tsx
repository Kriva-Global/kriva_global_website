import { useState } from 'react';
import data from '../../constants/data.json';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

interface SocialLink {
  title: string;
  url: string;
}

const AppHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className='bg-black text-white py-4 px-4 md:py-6 md:px-8 sticky top-0 z-50 relative'>
      <div className='container mx-auto flex items-center justify-between '>
        {/* Logo */}
        <div className='flex items-center p-3 space-y-6'>
          <svg
            width='36'
            height='36'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 36V0H11.25V16.875L21.375 6.75L29.25 14.625L19.125 24.75H36V36H22.5L11.25 24.75V36H0Z'
              fill='white'
            />
            <path
              d='M30.7889 5.73366V2.19567H32.486C32.665 2.19567 32.8375 2.23881 33.0037 2.32511C33.1731 2.4082 33.3121 2.53285 33.4208 2.69904C33.5327 2.86204 33.5886 3.06339 33.5886 3.30309C33.5886 3.54279 33.5311 3.75053 33.416 3.92631C33.3042 4.0989 33.1603 4.23153 32.9846 4.32422C32.812 4.4169 32.633 4.46325 32.4476 4.46325H31.1341V3.97905H32.2846C32.4476 3.97905 32.593 3.92152 32.7209 3.80646C32.8519 3.68821 32.9174 3.52042 32.9174 3.30309C32.9174 3.07937 32.8519 2.91957 32.7209 2.82369C32.593 2.72781 32.4524 2.67986 32.299 2.67986H31.4073V5.73366H30.7889ZM32.8503 4.08931L33.7324 5.73366H33.0421L32.1839 4.08931H32.8503ZM32.0881 7.84304C31.5575 7.84304 31.0605 7.74396 30.5971 7.54581C30.1337 7.34766 29.7262 7.0728 29.3746 6.72124C29.0231 6.36967 28.7482 5.96218 28.5501 5.49876C28.3519 5.03533 28.2528 4.53835 28.2528 4.00781C28.2528 3.47727 28.3519 2.98029 28.5501 2.51687C28.7482 2.05344 29.0231 1.64595 29.3746 1.29439C29.7262 0.942827 30.1337 0.667969 30.5971 0.469815C31.0605 0.271662 31.5575 0.172585 32.0881 0.172585C32.6186 0.172585 33.1156 0.271662 33.579 0.469815C34.0424 0.667969 34.4499 0.942827 34.8015 1.29439C35.1531 1.64595 35.4279 2.05344 35.6261 2.51687C35.8242 2.98029 35.9233 3.47727 35.9233 4.00781C35.9233 4.5831 35.8242 5.10724 35.6261 5.58026C35.4279 6.05007 35.1531 6.4256 34.8015 6.70685C34.4499 7.0728 34.0424 7.34766 33.579 7.54581C33.1156 7.74396 32.6186 7.84304 32.0881 7.84304ZM32.0881 7.12873C32.6634 7.12873 33.1859 6.9881 33.6557 6.70685C34.1287 6.4256 34.5059 6.05007 34.7871 5.58026C35.0684 5.10724 35.209 4.5831 35.209 4.00781C35.209 3.43253 35.0684 2.90998 34.7871 2.44016C34.5059 1.96715 34.1287 1.59002 33.6557 1.30877C33.1859 1.02752 32.6634 0.886896 32.0881 0.886896C31.5128 0.886896 30.9886 1.02752 30.5156 1.30877C30.0458 1.59002 29.6703 1.96715 29.389 2.44016C29.1078 2.90998 28.9672 3.43253 28.9672 4.00781C28.9672 4.5831 29.1078 5.10724 29.389 5.58026C29.6703 6.05007 30.0458 6.4256 30.5156 6.70685C30.9886 6.9881 31.5128 7.12873 32.0881 7.12873Z'
              fill='#C4FF65'
            />
          </svg>
        </div>
        {/* Toggle Button */}
        <button
          className='md:hidden absolute top-6 right-4 w-9 h-9 flex items-center justify-center text-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width='36'
            height='36'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z'
              fill='white'
            />
          </svg>
        </button>
        {/* Navigation Links for larger screens */}
        <div className='hidden md:flex md:items-center md:space-x-10'>
          <NavHashLink
            to='/#home'
            className='text-white text-xs transition-colors duration-300 hover:text-[#C4FF65]'
          >
            Home
          </NavHashLink>
          <NavHashLink
            to='/#our-work'
            className='text-white text-xs transition-colors duration-300 hover:text-[#C4FF65]'
          >
            Our Work
          </NavHashLink>
          <NavHashLink
            to='/#services'
            className='text-white text-xs transition-colors duration-300 hover:text-[#C4FF65]'
          >
            Services
          </NavHashLink>
          <NavLink
            to='/contact'
            className='text-white text-xs transition-colors duration-300 hover:text-[#C4FF65]'
          >
            Contact
          </NavLink>
        </div>
        {/* Full-Screen Blue Overlay */}
        <div
          className={`fixed inset-0 bg-brand-blue z-40 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } flex flex-col items-start p-3 space-y-6 md:hidden`}
        >
          {/* Positioned logo */}
          <div className='flex items-center p-4'>
            <svg
              width='36'
              height='36'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 36V0H11.25V16.875L21.375 6.75L29.25 14.625L19.125 24.75H36V36H22.5L11.25 24.75V36H0Z'
                fill='#C4FF65'
              />
              <path
                d='M30.7889 5.73366V2.19567H32.486C32.665 2.19567 32.8375 2.23881 33.0037 2.32511C33.1731 2.4082 33.3121 2.53285 33.4208 2.69904C33.5327 2.86204 33.5886 3.06339 33.5886 3.30309C33.5886 3.54279 33.5311 3.75053 33.416 3.92631C33.3042 4.0989 33.1603 4.23153 32.9846 4.32422C32.812 4.4169 32.633 4.46325 32.4476 4.46325H31.1341V3.97905H32.2846C32.4476 3.97905 32.593 3.92152 32.7209 3.80646C32.8519 3.68821 32.9174 3.52042 32.9174 3.30309C32.9174 3.07937 32.8519 2.91957 32.7209 2.82369C32.593 2.72781 32.4524 2.67986 32.299 2.67986H31.4073V5.73366H30.7889ZM32.8503 4.08931L33.7324 5.73366H33.0421L32.1839 4.08931H32.8503ZM32.0881 7.84304C31.5575 7.84304 31.0605 7.74396 30.5971 7.54581C30.1337 7.34766 29.7262 7.0728 29.3746 6.72124C29.0231 6.36967 28.7482 5.96218 28.5501 5.49876C28.3519 5.03533 28.2528 4.53835 28.2528 4.00781C28.2528 3.47727 28.3519 2.98029 28.5501 2.51687C28.7482 2.05344 29.0231 1.64595 29.3746 1.29439C29.7262 0.942827 30.1337 0.667969 30.5971 0.469815C31.0605 0.271662 31.5575 0.172585 32.0881 0.172585C32.6186 0.172585 33.1156 0.271662 33.579 0.469815C34.0424 0.667969 34.4499 0.942827 34.8015 1.29439C35.1531 1.64595 35.4279 2.05344 35.6261 2.51687C35.8242 2.98029 35.9233 3.47727 35.9233 4.00781C35.9233 4.5831 35.8242 5.10724 35.6261 5.58026C35.4279 6.05007 35.1531 6.4256 34.8015 6.70685C34.4499 7.0728 34.0424 7.34766 33.579 7.54581C33.1156 7.74396 32.6186 7.84304 32.0881 7.84304ZM32.0881 7.12873C32.6634 7.12873 33.1859 6.9881 33.6557 6.70685C34.1287 6.4256 34.5059 6.05007 34.7871 5.58026C35.0684 5.10724 35.209 4.5831 35.209 4.00781C35.209 3.43253 35.0684 2.90998 34.7871 2.44016C34.5059 1.96715 34.1287 1.59002 33.6557 1.30877C33.1859 1.02752 32.6634 0.886896 32.0881 0.886896C31.5128 0.886896 30.9886 1.02752 30.5156 1.30877C30.0458 1.59002 29.6703 1.96715 29.389 2.44016C29.1078 2.90998 28.9672 3.43253 28.9672 4.00781C28.9672 4.5831 29.1078 5.10724 29.389 5.58026C29.6703 6.05007 30.0458 6.4256 30.5156 6.70685C30.9886 6.9881 31.5128 7.12873 32.0881 7.12873Z'
                fill='#C4FF65'
              />
            </svg>
          </div>
          <button
            className='absolute top-0 right-4 w-9 h-9 flex items-center justify-center text-white'
            onClick={() => setIsOpen(false)}
          >
            <svg
              width='36'
              height='36'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 18L18 6M6 6L18 18'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <NavLink
            to='/'
            className='text-white text-5xl transition-colors duration-300 hover:text-[#C4FF65]'
          >
            Home
          </NavLink>
          <a
            href='#our-work'
            className='text-white text-5xl transition-colors duration-300 hover:text-[#C4FF65]'
          >
            Our Work
          </a>
          <a
            href='#services'
            className='text-white text-5xl transition-colors duration-300 hover:text-[#C4FF65]'
          >
            Services
          </a>
          <NavLink
            to='/contact'
            className='text-white text-5xl transition-colors duration-300 hover:text-[#C4FF65]'
          >
            Contact
          </NavLink>
          <div className='flex flex-col space-y-4'>
            {data.social_links.map((e: SocialLink) => (
              <div key={e.url} className='relative group'>
                <div className='flex items-center'>
                  <Link
                    to={e.url}
                    rel='noreffer noopener'
                    target='_blank'
                    className='flex-grow text-white transition-colors duration-300 group-hover:text-[#C4FF65]'
                  >
                    {e.title}
                  </Link>
                  <a
                    href={e.url}
                    className='text-gray-400 ml-72 sm:ml-96 md:ml-96 lg:ml-96 transition-colors duration-300 group-hover:text-[#C4FF65]'
                  >
                    ↗
                  </a>
                </div>
                <div className='border-t border-white mt-1 transition-colors duration-300 group-hover:border-[#C4FF65]'></div>
              </div>
            ))}
          </div>
          <div>
            <a href='mailto:work@kriva.global' className='text-2xl underline'>
              work@kriva.global
            </a>
            <p className='text-lg mt-2'>+91 - 70019 82394</p>
          </div>
          <p className='mt-2 text-xs font-light'>
            © 2024 Kriva Global —— All rights reserved.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
