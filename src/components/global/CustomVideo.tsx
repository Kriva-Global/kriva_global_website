import React, { useRef, useEffect, useState } from 'react';

const CustomVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
          } else if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='relative video-container'>
      <video
        ref={videoRef}
        className='w-full rounded-lg'
        src='/video.mp4'
        muted
        playsInline
        loop
      ></video>

      {/* Custom Controls */}
      <div className='absolute bottom-4 right-4 flex items-center space-x-2 video-controls'>
        <button
          onClick={togglePlay}
          className='bg-white text-black  rounded-full'
        >
          {isPlaying ? '❚❚' : '►'}
        </button>
      </div>
    </div>
  );
};

export default CustomVideo;
