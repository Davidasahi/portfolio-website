import React from 'react';
import ProjectsCard from './ProjectsCard';

const projectsData = [
  {
    id: 1,
    title: '123',
    description: '321',
    image: 'png',
    tag: ['All', 'Web'],
  },
  {
    id: 2,
    title: '456',
    description: '321',
    image: 'png',
    tag: ['All', 'Web'],
  },
  {
    id: 3,
    title: '788',
    description: '321',
    image: 'png',
    tag: ['All', 'Web'],
  },
];

const ProjectsSection = () => {
  return;
  <>
    <h2>My Projects</h2>
    <div>
      {projectsData.map((project) => (
        <ProjectsCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          tags={project}
        />
      ))}
    </div>
  </>;
};

export default ProjectsSection;
