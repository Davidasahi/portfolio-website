import React from 'react';
import image from 'next/image';

const AboutSection = () => {
  return (
    <section className="text-whit">
      <div className="md-grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16  xl:px-16">
        <image src="images" width={500} height={500} />
        <div>
          <h2>About Me</h2>
          <p>
            Before that, I was a Web Manager at RiverSpring Living, focusing on
            web management and SEO. I maintained a suite of websites using
            WordPress and other third-party plugins, and implemented SEO
            strategies across all sites. This included technical SEO using tools
            like All in One SEO, Google Search Console, and Google Analytics, as
            well as content SEO in coordination with our marketing team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
