import type { Project } from "./project";
import "./ProjectCard.css"
const ProjectCard: React.FC<Project> = ({
  title,
  description,
  techStack,
  liveUrl
}) => {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
      {liveUrl && <a href={liveUrl}>Live Demo</a>}
    </article>
  );
};

export default ProjectCard;