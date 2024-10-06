'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>JS</li>
        <li>TS</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>AWS</li>
        <li>Python</li>
        <li>SEO</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>University of Illinois Chicago</li>
        <li>National Chung Hsing University</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Google Ads</li>
        <li>Google Analytics</li>
        <li>AWS</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="aboutMePicture" src="./images/eagle-head-beak.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Currently, I am working on Embr as a Software Engineer for AWS
            Lambda performance monitor using
            JavaScript/TypeScript/React/Node/Express/Next.js. With an MBA and a
            background with years of experience in software development and tech
            SEO.
          </p>
          <br />
          <ul>
            <li>
              - Developed a Web App to monitor cold-start metrics for AWS Lambda
            </li>
            <li>- Managed multiple public websites using CMS with Tech SEO</li>
            <li>
              - Guest Speaker @remakeLabsTechTalk: Presented “AWS CloudTech.”
            </li>
            <li>- English/Chinese Bilingual</li>
          </ul>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8 text-white">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
