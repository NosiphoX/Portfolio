// components/ui/ProjectSlide.jsx

import { useState } from "react";
import TechChip from "./TechChip";
import BrowserFrame from "./BrowserFrame";

function ProjectSlide({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { title, description, story, category, technologies, github, liveDemo, image, accent, status } = project;

  return (
    <div className="project-slide" style={{ "--accent": accent }}>
      <div
        className={`project-flip ${isFlipped ? "is-flipped" : ""}`}
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        {/* FRONT */}
        <div className="project-flip__face project-flip__front">
          <BrowserFrame>
            {image ? (
              <img src={image} alt={`${title} preview`} className="project-slide__image" />
            ) : (
              <div className="project-flip__cover">
                <span className="project-flip__cover-status">
                  {status === "in-progress" ? "In Progress" : "Completed"}
                </span>
                <span className="project-flip__cover-title">{title}</span>
              </div>
            )}
          </BrowserFrame>
          <span className="project-slide__category">{category}</span>
          <h3 className="project-slide__title">{title}</h3>
          <span className="project-flip__hint">Click to see the story ↻</span>
        </div>

        {/* BACK */}
        <div className="project-flip__face project-flip__back">
          <span className="project-slide__category">{category}</span>
          <h3 className="project-slide__title">{title}</h3>
          <p className="project-slide__description">{story || description}</p>

          <div className="project-slide__tech">
            {technologies.map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </div>

          <div className="project-slide__actions" onClick={(e) => e.stopPropagation()}>
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
            {status === "in-progress" && (
              <span className="project-flip__status">Currently in development</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide;