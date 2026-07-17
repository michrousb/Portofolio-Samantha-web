import {create} from "zustand"
import type { Project } from "../components/project/project";
/*Theme Store*/

interface ThemeStore{
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeStore>((set)=> ({
    darkMode: false,
    toggleDarkMode: () =>
        set((state) => ({
            darkMode: !state.darkMode,
        })),
    
}));

/*Project Store*/

interface ProjectStore {
  projects: Project[];
}

export const useProjectStore = create<ProjectStore>()(() => ({
  projects: [
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website built to showcase my profile, skills, and projects.",
      techStack: ["React", "TypeScript", "CSS"],
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      techStack: ["Python", "C++"],
      liveUrl: "https://example.com",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      techStack: ["Prolog", "C"],
      liveUrl: "https://example.com",
    },
  ],
}));
