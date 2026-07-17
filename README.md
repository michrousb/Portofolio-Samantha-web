#  Personal Portfolio

A responsive personal portfolio built with **React**, **TypeScript**, **React Router**, **Zustand**, and modular CSS.

This project is the second version of my portfolio. Version 1 was developed with static HTML and CSS, while Version 2 migrates the website into a component-based React application with client-side routing and typed reusable components.

## Features

- Responsive portfolio layout
- Client-side navigation without full-page refresh
- Home, About, and Projects pages
- Reusable and typed `ProjectCard` component
- Light and dark theme toggle
- Global state management using Zustand
- Generic `useLocalStorage<T>` custom hook
- Modular CSS for page and component styling
- Project filtering based on live-demo availability

## Pages

### Home

Introduces the portfolio owner and provides quick navigation to the main sections of the website.

### About

Contains a short introduction, current interests, and tools that are currently being explored.

### Projects

Displays multiple projects using a reusable `ProjectCard` component. Each card receives typed props for its title, description, technology stack, and optional live-demo URL.

## React Router Implementation

React Router is used to switch between pages without triggering a complete browser refresh.

```tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/projects" element={<ProjectsPage />} />
</Routes>
```

## Typed ProjectCard Component

The project card uses a TypeScript interface to define the props that the component accepts.

```ts
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
}
```

The component is typed using `React.FC<Project>`:

```tsx
const ProjectCard: React.FC<Project> = ({
  title,
  description,
  techStack,
  liveUrl,
}) => {
  // Component content
};
```

This helps TypeScript detect missing props or incorrect data types during development.

## Generic Custom Hook

A generic `useLocalStorage<T>` hook is used to synchronize a React state value with the browser's local storage.

```ts
const [showLiveOnly, setShowLiveOnly] =
  useLocalStorage<boolean>("show-live-only", false);
```

The generic type `<T>` allows the same hook to work with different value types:

```ts
useLocalStorage<boolean>(...)
useLocalStorage<string>(...)
useLocalStorage<Project[]>(...)
```

In this project, it stores the user's project-filter preference so the selected option remains available after the page is refreshed.

## Theme Toggle with Zustand

The light and dark theme is managed through a Zustand store.

```ts
interface ThemeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeStore>()((set) => ({
  darkMode: false,

  toggleDarkMode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}));
```

The `ThemeButton` component accesses the state and action directly:

```tsx
const darkMode = useThemeStore((state) => state.darkMode);
const toggleDarkMode = useThemeStore(
  (state) => state.toggleDarkMode
);
```

### Theme Toggle: `useState` vs Zustand

| Aspect | `useState` | Zustand |
|---|---|---|
| State scope | Local to a component | Shared through a global store |
| Sharing state | State must be lifted or passed through props | Components can access the store directly |
| Provider required | No | No provider is required for a basic Zustand store |
| Best use case | Small state used by one component | State used by multiple distant components |
| Setup | Very simple | Requires a store and an additional dependency |
| Scalability | Can become harder when many components need the state | Easier to organize shared state and actions |

Without Zustand, the theme state could be placed in `App.tsx` using `useState`:

```tsx
const [darkMode, setDarkMode] = useState(false);
```

The value and toggle function would then need to be passed through props:

```tsx
<Navbar
  darkMode={darkMode}
  toggleDarkMode={() => setDarkMode((mode) => !mode)}
/>
```

This approach is valid for a small application. However, it becomes less convenient when the theme state is needed by several unrelated components.

With Zustand, each component can directly select the state it needs:

```tsx
const darkMode = useThemeStore((state) => state.darkMode);
```

This avoids passing theme props through components that do not use them.

## Zustand for the Project List

The Bonus 3 requirement asks for the **projects list** to be managed as global state using Zustand.

A suitable store shape is:

```ts
interface ProjectStore {
  projects: Project[];
  addProject: (project: Project) => void;
}
```

The Projects page retrieves the list with:

```tsx
const projects = useProjectStore((state) => state.projects);
```

Using Zustand only for the theme toggle demonstrates global state, but Bonus 3 is fully satisfied when the project list itself is also stored in Zustand.

### Zustand vs Plain `useState` for Projects

For a static portfolio, storing the project list directly in `ProjectsPage` is simpler and requires less setup.

Zustand becomes more useful when:

- Several pages need the same project data
- Projects can be added, removed, edited, or filtered
- A dashboard or project-detail page is added later
- State must be changed from different components

For the current project, Zustand introduces additional structure, but it also prepares the application for future modules and more complex project-management features.

## Version History

### Version 1.0

- Static HTML and CSS portfolio
- Single-page section navigation

### Version 2.0

- Migrated to React and TypeScript
- Added React Router
- Added reusable typed components
- Added Zustand state management
- Added a generic custom hook
- Continued using modular CSS
