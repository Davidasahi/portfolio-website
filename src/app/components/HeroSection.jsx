import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grind-cols-1 lg:grind-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-8xl lg:leading-normal font-extrabold">
            Hi I am David
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            How to contact us for tes for technicas for technicachnical support
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] left:w-[400px] lg:">
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
