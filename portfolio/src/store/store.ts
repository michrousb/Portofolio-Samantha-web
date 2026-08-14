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
  setProjects: (projects: Project[]) => void;
}
export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],

  setProjects: (projects) => set({ projects }),
}));