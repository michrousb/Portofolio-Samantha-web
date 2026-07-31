import type { Project } from "./project";
import "./ProjectCard.css"
const ProjectCard: React.FC<Project> = ({
  title,
  description,
  techStack,
  liveUrl,
}) => {
  return (
    <article className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
      {liveUrl ? (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      ) : (
        <span className="project-card-no-demo">No live demo yet</span>
      )}
    </article>
  );
};

export default ProjectCard;