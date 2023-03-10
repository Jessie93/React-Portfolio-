import React from 'react';
import { useParams } from 'react-router-dom';
import './Project.css';

function Project(props) {
  const { id } = useParams();
  const project = props.project;

  return (
    <div className="project portfolio-grid" style={{ gridArea: id }}>
      <img src={project.image} alt={project.title} />
      <div className="project-text">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>
          <a href={project.deployedUrl}>Deployed Link</a>
        </p>
        <p>
          <a href={project.githubUrl}>GitHub Link</a>
        </p>
      </div>
      <div className="overlay"></div> 
    </div>
  );
}

export default Project;
