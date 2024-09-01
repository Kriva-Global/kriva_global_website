import React from 'react';

interface InfinityBannerProps {
    addExtraMargin?: boolean;
}

const InfinityBanner: React.FC<InfinityBannerProps> = ({ addExtraMargin = false }) => {
  return (
    <div
      className={`get-in-touch-banner w-full overflow-x-hidden bg-white py-2 relative z-20 ${
        addExtraMargin ? 'mt-20' : 'mt-0'
      }`}
    >
      <div className="scrolling-content flex justify-between whitespace-nowrap text-black font-medium text-sm">
        <div className="get-in-touch-item flex items-center px-4">
          <img
            height={12}
            width={12}
            src="/blue-logo.svg"
            alt="blue logo"
            className="mr-2"
          />
          <span className="get-in-touch-text">GET IN TOUCH</span>
        </div>
        <div className="get-in-touch-item flex items-center px-4">
          <img
            height={12}
            width={12}
            src="/blue-logo.svg"
            alt="blue logo"
            className="mr-2"
          />
          <span className="get-in-touch-text">KRIVA GLOBAL</span>
        </div>
        <div className="get-in-touch-item flex items-center px-4">
          <img
            height={12}
            width={12}
            src="/blue-logo.svg"
            alt="blue logo"
            className="mr-2"
          />
          <span className="get-in-touch-text">GET IN TOUCH</span>
        </div>
       
      </div>
    </div>
  );
};

export default InfinityBanner;
