import React from 'react';
import Project from './Project';
import Projects from './data';
import './Project.css';

function ProjectGallery() {
  return (
    <div className="project-gallery portfolio-grid">
      <Project project={Projects[0]} id="1" />
      <Project project={Projects[1]} id="2" />
      <Project project={Projects[2]} id="3" />
      <Project project={Projects[3]} id="4" />
      <Project project={Projects[4]} id="5" />
      <Project project={Projects[5]} id="6" />
    </div>
  );
}


export default ProjectGallery;

