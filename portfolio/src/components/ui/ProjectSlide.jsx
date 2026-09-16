// components/ui/ProjectSlide.jsx

import TechChip from "./TechChip";
import BrowserFrame from "./BrowserFrame";

function ProjectSlide({ project }) {
  const { title, description, category, technologies, github, liveDemo, image, accent } = project;

  return (
    <div className="project-slide" style={{ "--accent": accent }}>
      <div className="project-slide__visual">
        <BrowserFrame>
          <img src={image} alt={`${title} preview`} className="project-slide__image" />
        </BrowserFrame>
      </div>

      <div className="project-slide__content">
        <span className="project-slide__category">{category}</span>
        <h3 className="project-slide__title">{title}</h3>
        <p className="project-slide__description">{description}</p>

        <div className="project-slide__tech">
          {technologies.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>

        <div className="project-slide__actions">
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide;