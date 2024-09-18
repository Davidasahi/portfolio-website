import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '../../../public/images/github-mark-white.svg';
import LinkedinIcon from '../../../public/images/LI-In-Bug.png';

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {' '}
          In this tutorial, we will build a responsive and customizable
          portfolio website using NextJs and Tailwind.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Davidasahi">
            <Image src={GithubIcon} alt="GitHub Icon" className="w-10 h-10" />
          </Link>
          <Link href="https://www.linkedin.com/in/yuhsuantung/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="w-10 h-10"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white text-sm mb-4 font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] mb-4 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="david@gmail.com"
            />
            <label htmlFor="subject" className="text-white text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="What do you want to say?"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white text-sm mb-2 font-medium"
            >
              Text
            </label>
            <textarea
              type="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Say somethings..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
