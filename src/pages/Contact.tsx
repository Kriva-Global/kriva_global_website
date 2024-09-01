import { MdCurrencyRupee } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import QuickcallnDRef from "../components/layout/QuickcallnDRef";
import InfinityBanner from "../components/layout/InfinityBanner";
import { MdArrowOutward } from 'react-icons/md';

export const Contact = () => {
  return (
    <div>
      <section className="contact-page relative ">
        {/* Hero Section */}
        <section className="contact-hero-section bg-black text-white px-2 py-4 md:px-10 md:py-12">
          <p className="text-sm uppercase z-10 relative">Get in touch</p>
          <h1 className="text-2xl md:text-6xl font-bold z-10 relative">Let's make something memorable together.</h1>
        </section>
        {/* Glove Background Image */}
        <div className="absolute inset-0 flex align-center justify-end overflow-hidden md:flex hidden ">
          <img
            src="/backgroundglove.png"
            alt="Globe Logo"
            className="w-[100%] h-auto object-cover opacity-10 transform translate-x-[25%] lg:translate-x-[50%]"
          />
        </div>
        
        {/* Get In Touch Banner */}
        <InfinityBanner addExtraMargin={false} />
        
        {/* Budget Section */}
        <div className="contact-hero-section bg-black text-white mt-20 px-2 py-4 md:px-10 md:py-12">
          <div className="flex flex-row text-center justify-between">
            <div className=" mt-0">
              <p className="text-lg uppercase pb-0">My Budget Is</p>
            </div>
            <div className="flex items-center justify-center space-x-2 pb-6">
              <div className="flex items-center space-x-1 transition-colors duration-300 hover:text-[#C4FF65]">
                <MdCurrencyRupee className="mr-1" />
                INR
              </div>
              <span>/</span>
              <div className="flex items-center space-x-1 transition-colors duration-300 hover:text-[#C4FF65]">
                <TbCurrencyDollar className="mr-1" />
                USD
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 p-0">
            <div className="bg-transparent border border-white rounded-full px-4 py-2 flex-none ">
              ₹50,000
            </div>
            <div className="bg-lime-400 text-black border border-lime-400 rounded-full px-4 py-2 flex-none">
              ₹50,000 - ₹1L
            </div>
            <div className="bg-transparent border border-white rounded-full px-4 py-2 flex-none">
              ₹1L - ₹3L
            </div>
            <div className="bg-transparent border border-white rounded-full px-4 py-2 flex-none">
              ₹3L +
            </div>
          </div>
        </div>
        </section>
        {/* Contact Form Section */}
        <section className="contact-hero-section bg-black text-white mt-20 px-2 py-4 md:px-10 md:py-0 md:mt-0">
          <div className="flex flex-col md:flex-row align-center  gap-10">
            <div className="flex-grow">
              <input type="text" className=" w-full md:w-auto bg-transparent border-b border-gray-100 focus:outline-none" placeholder="   Deepanjan Sen" />
            </div>

            <div className="flex space-x-2">
              <div className="flex">
                <select className="bg-transparent border-b border-gray-100 focus:outline-none">
                  <option className="bg-black" value="IN">IN +91</option>
                  <option className="bg-black" value="US">US +1</option>
                </select>

                <input type="text" className="w-full md:w-auto bg-transparent border-b border-gray-100 focus:outline-none" placeholder="  Phone" />
              </div>
            </div>

            <div className="w-full">
              <input type="email" className="w-full bg-transparent border-b border-gray-100 focus:outline-none" placeholder="   E-mail" />
            </div>
          </div>
        </section>

        {/* Interested Section */}
        <section className="contact-hero-section bg-black text-white mt-10 md:mt-20 px-2 py-4 md:px-10 md:py-0">
          <div className="mt-8">
            <p className="text-sm mb-4">I'M INTERESTED IN</p>
            <div className="flex flex-wrap gap-5">
              {["A new website", "Brand Identity Design", "Web App Design", "Mobile App Design", "E-Commerce", "UI/UX", "Web / App Development", "App from scratch", "On-going support", "Others"].map((interest, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full border ${index === 2 || index === 3 ? 'bg-lime-400 text-black border-lime-400' : 'border-white'}`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <div>
              
              <input type="text" className="w-full bg-transparent pb-3 border-b border-gray-600 focus:outline-none" placeholder="What’s your timeline? (in days)" />
            </div>
            <div>
              <input className="w-full bg-transparent border-b pb-3 border-gray-600 focus:outline-none" placeholder="Tell us about your project"/>  
            </div>
          </div>
        </section>

        <section className="contact-hero-section bg-black text-white mt-10 md:mt-20 ml-0  px-2 py-4">
          <div className="flex flex-row justify-start items-center">
            <div className="bg-brand-blue flex justify-start items-center text-white py-3 px-8  rounded-full mt-4 ml-24">
              Start a Project <MdArrowOutward />

            </div>
          </div>
          </section>
        <InfinityBanner addExtraMargin={true} />
        <QuickcallnDRef />
    </div>
  );
};
