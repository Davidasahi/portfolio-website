import React from 'react';
import ProjectsCard from './ProjectsCard';

const projectsData = [
  {
    id: 1,
    title: 'Embr',
    description:
      'Embr provides an end-to-end solution for monitoring and warming serverless functions to maximize cost benefits and minimize the impact of “cold starting” these functions. Open Source Product develops under the tech accelerator OS Labs',
    image: '/images/embr.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Systemazing',
    description:
      'A smart solution for designing systems with drag and drop canvas for designing systems design diagrams with feedback from an AI assistant.',
    image: '/images/hero-image.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Skincare Products',
    description: '321',
    image: '/images/embr.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Next Portfolio Website',
    description: 'Personal Website',
    image: '/images/embr.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button class>All</button>
        <button>Web</button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
