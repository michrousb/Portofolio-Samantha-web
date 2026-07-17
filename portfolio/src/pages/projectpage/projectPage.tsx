import ProjectCard from "../../components/project/ProjectCard";
import type { Project } from "../../components/project/project";
import "./projectPage.css"
import useLocalStorage from "../../hooks/useLocalStorage";

const projects : Project[] = [
    {
        title: "Personal Portofolio",
        description: "A responsive personal portfolio website built to showcase my profile, skills, and projects.",
        techStack: ["React", "TypeScript", "CSS"],
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        techStack: ["Python", "C++"],
        liveUrl: "https://example.com"
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        techStack: ["Prolog", "C"],
        liveUrl: "https://example.com"
    },
];

function ProjectsPage(){
    const [showLiveOnly, setShowLiveOnly] =
    useLocalStorage<boolean>("show-live-only", false);

  const visibleProjects = showLiveOnly
    ? projects.filter((project) => Boolean(project.liveUrl))
    : projects;
    return(
        <section className= "projects-page page-container">
            <h1>Projects <span className="highlight-text">I Have Made.</span></h1>
            <label className="project-filter">
                <input
                type="checkbox"
                checked={showLiveOnly}
                onChange={(event) =>
                    setShowLiveOnly(event.target.checked)
                }
                />

                Show projects with live demos only
            </label>
            <div className="projects-grid">
                {visibleProjects.map((project) => (
                    <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    liveUrl={project.liveUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsPage;