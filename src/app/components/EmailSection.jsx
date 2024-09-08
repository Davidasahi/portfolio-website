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
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="david@gmail.com"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
