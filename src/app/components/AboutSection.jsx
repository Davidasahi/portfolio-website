'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul>
        <li>JS</li>
        <li>TS</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>UIC</li>
        <li>NCHU</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul>
        <li>Codesmith</li>
        <li>NCHU</li>
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
    <section className="text-white">
      <div className="md-grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16  xl:px-16">
        <Image src="/images/eagle-head-beak.jpg" width={500} height={500} />
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Before that, I was a Web Manager at RiverSpring Living, focusing on
            web management and SEO. I maintained a suite of websites using
            WordPress and other third-party plugins, and implemented SEO
            strategies across all sites. This included technical SEO using tools
            like All in One SEO, Google Search Console, and Google Analytics, as
            well as content SEO in coordination with our marketing team.
          </p>
          <div className="flex flex-row mt-8 ">
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
