'use client';
import React, { useState, useRef } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Embr',
    description:
      'Embr provides an end-to-end solution for monitoring and warming serverless functions to maximize cost benefits and minimize the impact of “cold starting” these functions. Open Source Product develops under the tech accelerator OS Labs',
    image: './images/embr.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Systemazing',
    description:
      'A smart solution for designing systems with drag and drop canvas for designing systems design diagrams with feedback from an AI assistant.',
    image: './images/hero-image.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Skincare Products',
    description: '321',
    image: './images/embr.png',
    tag: ['All'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Next Portfolio Website',
    description: 'Personal Website',
    image: './images/embr.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
