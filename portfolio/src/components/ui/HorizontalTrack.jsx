import ProjectSlide from "./ProjectSlide";

function HorizontalTrack({ projects }) {
  return (
    <div className="horizontal-track">

      {projects.map((project) => (

        <ProjectSlide
          key={project.id}
          project={project}
        />

      ))}

    </div>
  );
}

export default HorizontalTrack;