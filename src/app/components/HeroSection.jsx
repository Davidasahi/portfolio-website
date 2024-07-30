import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grind-cols-1 sm:grind-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Hi I am{' '}
            </span>
            David
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 lg:text-xl">
            How to contact us for tes for technicas for technicachnical support
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] left:w-[400px] lg:[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
