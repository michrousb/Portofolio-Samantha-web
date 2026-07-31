# Personal Portfolio

**Current Version: 3.0**

A responsive personal portfolio built with **React**, **TypeScript**, **React Router**, **Zustand**, and regular CSS.

## Version History

### Version 3.0

- Improved the Projects page using v0.dev and GitHub Copilot
- Added project filters and live project counts
- Added project sorting
- Added loading and empty states
- Improved responsive design and accessibility
- Completed an accessibility audit using axe DevTools

### Version 2.0

- Migrated the static portfolio to React and TypeScript
- Added React Router
- Added reusable typed components
- Added Zustand state management
- Added a generic `useLocalStorage<T>` hook
- Continued using regular CSS

### Version 1.0

- Static HTML and CSS portfolio
- Single-page section navigation

## Features

- Responsive portfolio layout
- Home, About, and Projects pages
- Client-side routing without full-page refresh
- Reusable and typed `ProjectCard` component
- Light and dark themes
- Global state management using Zustand
- Generic `useLocalStorage<T>` hook
- Project filtering and sorting
- Project loading and empty states
- Accessible and keyboard-friendly interface
- Regular CSS with reusable theme variables

## Project Structure

```text
.
├── .vscode/
│   └── settings.json
├── bonuses/
│   └── bonus documentation and screenshots
├── portfolio/
│   ├── public/
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── footer/
│   │   │   ├── navigation/
│   │   │   └── project/
│   │   ├── hooks/
│   │   │   └── useLocalStorage.ts
│   │   ├── pages/
│   │   │   ├── aboutpage/
│   │   │   ├── homepage/
│   │   │   └── projectpage/
│   │   ├── store/
│   │   │   └── store.ts
│   │   ├── styles/
│   │   │   └── variables.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── package-lock.json
└── README.md
```

## Pages

### Home

Introduces the portfolio owner and provides navigation to the main pages.

### About

Contains a short introduction, current interests, and technologies being explored.

### Projects

Displays projects using a reusable `ProjectCard` component with:

- All Projects, Live Demo, and Without Demo filters
- Project counts
- Sorting options
- Loading skeletons
- Empty state with a reset button
- Responsive one-, two-, and three-column layouts

