import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import ProjectCard from "../../components/project/ProjectCard";
import type { Project } from "../../components/project/project";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useProjectStore } from "../../store/store";
import "./projectPage.css";

type DemoFilter = "all" | "with-demo" | "without-demo";
type SortOrder = "default" | "title-asc" | "title-desc" | "tech-count-desc";

const FILTER_OPTIONS: readonly { value: DemoFilter; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "with-demo", label: "Live Demo" },
  { value: "without-demo", label: "Without Demo" },
];

const SORT_OPTIONS: readonly { value: SortOrder; label: string }[] = [
  { value: "default", label: "Default order" },
  { value: "title-asc", label: "Title A–Z" },
  { value: "title-desc", label: "Title Z–A" },
  { value: "tech-count-desc", label: "Most technologies" },
];

function hasLiveDemo(project: Project): boolean {
  return Boolean(project.liveUrl);
}

function isSortOrder(value: string): value is SortOrder {
  return SORT_OPTIONS.some((option) => option.value === value);
}

function ProjectsPage() {
  const projects = useProjectStore((state) => state.projects);

  const [demoFilter, setDemoFilter] = useLocalStorage<DemoFilter>(
    "projects-demo-filter",
    "all"
  );
  const [sortOrder, setSortOrder] = useLocalStorage<SortOrder>(
    "projects-sort-order",
    "default"
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 250);
    return () => window.clearTimeout(timer);
  }, []);

  const counts = useMemo(
    () => ({
      all: projects.length,
      "with-demo": projects.filter(hasLiveDemo).length,
      "without-demo": projects.filter((project) => !hasLiveDemo(project)).length,
    }),
    [projects]
  );

  const visibleProjects = useMemo<Project[]>(() => {
    const filtered = projects.filter((project) => {
      if (demoFilter === "with-demo") return hasLiveDemo(project);
      if (demoFilter === "without-demo") return !hasLiveDemo(project);
      return true;
    });

    const sorted = [...filtered];
    if (sortOrder === "title-asc") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "title-desc") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "tech-count-desc") {
      sorted.sort((a, b) => b.techStack.length - a.techStack.length);
    }

    return sorted;
  }, [projects, demoFilter, sortOrder]);

  const activeFilterLabel =
    FILTER_OPTIONS.find((option) => option.value === demoFilter)?.label ?? "All Projects";

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextValue = event.target.value;
    if (isSortOrder(nextValue)) {
      setSortOrder(nextValue);
    }
  }

  function resetFilters() {
    setDemoFilter("all");
    setSortOrder("default");
  }

  return (
    <section className="projects-page page-container">
      <header className="projects-page__header">
        <h1 className="projects-page__title">
          Projects <span className="highlight-text">I Have Made.</span>
        </h1>
        <p className="projects-page__intro">
          Explore my work in one place. Filter by live demo availability, sort the
          list, and find the projects that matter most.
        </p>
      </header>

      <section className="projects-page__toolbar" aria-label="Project filters and sorting">
        <div className="projects-page__filters" role="group" aria-label="Project filter buttons">
          {FILTER_OPTIONS.map((option) => {
            const isActive = option.value === demoFilter;
            return (
              <button
                key={option.value}
                type="button"
                className={
                  isActive
                    ? "projects-filter-button projects-filter-button--active"
                    : "projects-filter-button"
                }
                aria-pressed={isActive}
                onClick={() => setDemoFilter(option.value)}
              >
                <span className="projects-filter-label">{option.label}</span>
                <span className="projects-filter-count">{counts[option.value]}</span>
              </button>
            );
          })}
        </div>

        <div className="projects-page__sort">
          <label className="projects-sort-label" htmlFor="projects-sort-select">
            Sort by
          </label>
          <select
            id="projects-sort-select"
            className="projects-sort-select"
            value={sortOrder}
            onChange={handleSortChange}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {isLoading ? (
        <>
          <p className="projects-page__status" role="status">
            Loading projects…
          </p>
          <div className="projects-grid">
            {Array.from({ length: 6 }, (_, index) => (
              <article className="project-skeleton" key={index} aria-hidden="true">
                <div className="project-skeleton-title" />
                <div className="project-skeleton-line" />
                <div className="project-skeleton-line project-skeleton-line--short" />
                <div className="project-skeleton-badges">
                  <span className="project-skeleton-badge" />
                  <span className="project-skeleton-badge" />
                  <span className="project-skeleton-badge" />
                </div>
                <div className="project-skeleton-action" />
              </article>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="projects-page__status" role="status">
            Showing <strong>{visibleProjects.length}</strong> of {counts.all} projects — {activeFilterLabel}
          </p>

          {visibleProjects.length > 0 ? (
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
          ) : (
            <div className="projects-empty-state" role="status">
              <h2>No matching projects</h2>
              <p>
                There are no projects that match the current filter. Reset the filters to see the full
                list again.
              </p>
              <button type="button" className="projects-empty-state-button" onClick={resetFilters}>
                Reset Filters
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default ProjectsPage;