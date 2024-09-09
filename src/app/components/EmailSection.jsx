import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '../../../public/images/github-mark-white.svg';
import LinkedinIcon from '../../../public/images/LI-In-Bug.png';

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {' '}
          This example shows how to use Resend with Next.js. This example shows
          how to use Resend with Next.js. This example shows how to use Resend
          with Next.js.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="">
            <Image src={GithubIcon} alt="GitHub Icon" className="w-10 h-10" />
          </Link>
          <Link href="">
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
              className="text-white black text-sm mb-2 font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="david@gmail.com"
            />
            <label
              htmlFor="subject"
              className="text-white black text-sm mb-2 font-medium"
            >
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
              className="text-white black text-sm mb-2 font-medium"
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
