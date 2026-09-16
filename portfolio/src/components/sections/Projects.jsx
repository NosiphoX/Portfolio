import HorizontalTrack from "../ui/HorizontalTrack";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">
      <HorizontalTrack projects={projects} />
    </section>
  );
}

export default Projects;