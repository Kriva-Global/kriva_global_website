import React from 'react';
import data from '../../constants/data.json';

interface SocialLink {
  title: string;
  url: string;
}

const AppFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row-reverse justify-between items-start px-4 md:px-0 space-y-8 md:space-y-0">
        {/* Social Links  */}
        <div className="flex flex-col space-y-4">
          {data.social_links.map((e: SocialLink) => (
            <div key={e.url} className="relative group">
              <div className="flex items-center">
                <a
                  href={e.url}
                  className="flex-grow text-white transition-colors duration-300 group-hover:text-[#C4FF65]"
                >
                  {e.title}
                </a>
                <span className="text-gray-400 ml-72 sm:ml-96 md:ml-96 lg:ml-96 transition-colors duration-300 group-hover:text-[#C4FF65]">
                  ↗
                </span>
              </div>
              <div className="border-t border-white mt-1 transition-colors duration-300 group-hover:border-[#C4FF65]"></div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-sm text-gray-400 mb-2">NEW BUSINESS</h2>
          <a href="mailto:work@kriva.global" className="text-2xl underline">
            work@kriva.global
          </a>
          <p className="text-lg mt-2">+91 - 70019 82394</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-8 pt-4 flex justify-between items-center px-4 md:px-0 text-gray-500 text-right">
        <div className="flex items-center">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40V0H12.5V18.75L23.75 7.5L32.5 16.25L21.25 27.5H40V40H25L12.5 27.5V40H0Z" fill="#C4FF65"/>
            <path d="M34.2099 6.37074V2.43963H36.0955C36.2944 2.43963 36.4861 2.48757 36.6708
             2.58345C36.859 2.67578 37.0135 2.81428 37.1342 2.99893C37.2585 3.18004 37.3207 3.40376
              37.3207 3.6701C37.3207 3.93643 37.2567 4.16726 37.1289 4.36257C37.0046 4.55433 36.8448 4.7017
               36.6495 4.80469C36.4577 4.90767 36.2589 4.95916 36.0529 4.95916H34.5934V4.42116H35.8718C36.0529
                4.42116 36.2145 4.35724 36.3565 4.2294C36.5021 4.09801 36.5749 3.91158 36.5749 3.6701C36.5749 
                3.42152 36.5021 3.24396 36.3565 3.13743C36.2145 3.03089 36.0582 2.97763 
                35.8878 2.97763H34.897V6.37074H34.2099ZM36.5004 4.54368L37.4805 6.37074H36.7134L35.7599 4.54368H36.5004ZM35.6534
                 8.71449C35.0639 8.71449 34.5117 8.6044 33.9968 8.38423C33.4819 8.16406 33.0291 7.85866 32.6385 7.46804C32.2479
                  7.07741 31.9425 6.62464 31.7223 6.10973C31.5021 5.59482 31.392 5.04261 31.392 4.45312C31.392 3.86364 31.5021 
                  3.31143 31.7223 2.79652C31.9425 2.28161 32.2479 1.82884 32.6385 1.43821C33.0291 1.04759 33.4819 0.742188 
                  33.9968 0.522017C34.5117 0.301846 35.0639 0.191761 35.6534 0.191761C36.2429 0.191761 36.7951 0.301846 
                  37.31 0.522017C37.8249 0.742188 38.2777 1.04759 38.6683 1.43821C39.0589 1.82884 39.3643 2.28161 39.5845
                   2.79652C39.8047 3.31143 39.9148 3.86364 39.9148 4.45312C39.9148 5.04261 39.8047 5.59482 39.5845
                    6.10973C39.3643 6.62464 39.0589 7.07741 38.6683 7.46804C38.2777 7.85866 37.8249 8.16406 37.31
                     8.38423C36.7951 8.6044 36.2429 8.71449 35.6534 8.71449ZM35.6534 7.92081C36.2926 7.92081 36.8732 
                     7.76456 37.3952 7.45206C37.9208 7.13956 38.3398 6.7223 38.6523 6.20028C38.9648 5.67472 39.1211 
                     5.09233 39.1211 4.45312C39.1211 3.81392 38.9648 3.23331 38.6523 2.71129C38.3398 2.18572 37.9208 
                     1.76669 37.3952 1.45419C36.8732 1.14169 36.2926 0.98544 35.6534 0.98544C35.0142 0.98544 34.4318 
                     1.14169 33.9062 1.45419C33.3842 1.76669 32.967 2.18572 32.6545 2.71129C32.342 3.23331 32.1857 
                     3.81392 32.1857 4.45312C32.1857 5.09233 32.342 5.67472 32.6545 6.20028C32.967 6.7223 33.3842 
                     7.13956 33.9062 7.45206C34.4318 7.76456 35.0142 7.92081 35.6534 7.92081Z" fill="#C4FF65"/>
          </svg>
        </div>
        
        <div>
          <div className="flex space-x-4 justify-end mt-2 text-sm font-xs">
            <a href="https://google.com" className="hover:text-gray-400">Index</a>
            <a href="https://google.com" className="hover:text-gray-400">Privacy Policy</a>
          </div>
          <p className="mt-2 text-xs font-light">© 2024 Kriva Global —— All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
