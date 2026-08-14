# Personal Portfolio

**Current Version: 4.0**

A responsive full-stack personal portfolio built with **React**, **TypeScript**, **React Router**, **Zustand**, **Express.js**, **Zod**, and regular CSS.

Version 4.0 introduces a backend REST API, allowing project data to be managed dynamically instead of relying only on hardcoded frontend data.

## Version History

### Version 4.0

* Added an Express.js + TypeScript backend
* Created a REST API for managing portfolio projects
* Added `GET /api/projects` to retrieve all projects
* Added `GET /api/projects/:id` to retrieve a specific project
* Added `POST /api/projects` to create a new project
* Added `DELETE /api/projects/:id` to delete a project
* Added Zod validation for incoming POST requests
* Added consistent API error handling
* Added CORS support for frontend-backend communication
* Connected the React frontend to the backend API using `fetch`
* Replaced hardcoded frontend project data with API data
* Used an in-memory array for temporary backend data storage
* Tested API endpoints using Thunder Client

### Version 3.0

* Improved the Projects page using v0.dev and GitHub Copilot
* Added project filters and live project counts
* Added project sorting
* Added loading and empty states
* Improved responsive design and accessibility
* Completed an accessibility audit using axe DevTools

### Version 2.0

* Migrated the static portfolio to React and TypeScript
* Added React Router
* Added reusable typed components
* Added Zustand state management
* Added a generic `useLocalStorage<T>` hook
* Continued using regular CSS

### Version 1.0

* Static HTML and CSS portfolio
* Single-page section navigation

## Features

* Responsive portfolio layout
* Home, About, and Projects pages
* Client-side routing without full-page refresh
* Reusable and typed `ProjectCard` component
* Light and dark themes
* Global state management using Zustand
* Generic `useLocalStorage<T>` hook
* Project filtering and sorting
* Project loading and empty states
* Accessible and keyboard-friendly interface
* Regular CSS with reusable theme variables
* REST API built with Express.js and TypeScript
* Dynamic project data retrieval from the backend
* Project creation and deletion through API endpoints
* Input validation using Zod
* Consistent HTTP status codes and error responses
* Frontend-backend communication using `fetch`
* API endpoint testing with Thunder Client

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router
* Zustand
* CSS

### Backend

* Node.js
* Express.js
* TypeScript
* Zod
* CORS
* ts-node-dev

### Development Tools

* Git
* GitHub
* Thunder Client
* axe DevTools
* GitHub Copilot
* v0.dev

## Project Structure

```text
.
├── .vscode/
│   └── settings.json
│
├── bonuses/
│   └── bonus documentation and screenshots
│
├── backend/
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── portfolio/
│   ├── public/
│   │   └── images/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── footer/
│   │   │   ├── navigation/
│   │   │   └── project/
│   │   │
│   │   ├── hooks/
│   │   │   └── useLocalStorage.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── aboutpage/
│   │   │   ├── homepage/
│   │   │   └── projectpage/
│   │   │
│   │   ├── store/
│   │   │   └── store.ts
│   │   │
│   │   ├── styles/
│   │   │   └── variables.css
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
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

* All Projects, Live Demo, and Without Demo filters
* Project counts
* Sorting options
* Loading skeletons
* Empty state with a reset button
* Responsive one-, two-, and three-column layouts
* Project data retrieved dynamically from the backend API

## Backend API

The backend is built using **Express.js** and **TypeScript**.

The API currently stores project data in an **in-memory array**, meaning the data resets whenever the backend server restarts.

### Example GET Request

```http
GET /api/projects
```

Example response:

```json
[
  {
    "id": 1,
    "title": "Personal Portfolio",
    "description": "A responsive personal portfolio website built to showcase my profile, skills, and projects.",
    "techStack": ["React", "TypeScript", "CSS"],
    "githubUrl": "https://github.com/example/portfolio"
  }
]
```

### Example POST Request

```http
POST /api/projects
```

Request body:

```json
{
  "title": "Weather App",
  "description": "A simple application for displaying weather information.",
  "techStack": ["React", "TypeScript"],
  "liveUrl": "https://example.com/weather",
  "githubUrl": "https://github.com/example/weather"
}
```

A successful request returns:

```text
201 Created
```

### Example DELETE Request

```http
DELETE /api/projects/1
```

Example response:

```json
{
  "message": "Project deleted successfully"
}
```

## Input Validation

POST requests are validated using **Zod** before new project data is added.

The project schema validates:

* `title` must be a string between 1 and 100 characters
* `description` must be a string between 10 and 500 characters
* `techStack` must contain at least one string
* `liveUrl` is optional but must be a valid URL if provided
* `githubUrl` must be a valid URL

Invalid input returns a:

```text
400 Bad Request
```

Example:

```json
{
  "error": {
    "message": "Invalid project data"
  }
}
```

## Error Handling

The API uses consistent HTTP status codes.

| Status Code | Meaning                      |
| ----------- | ---------------------------- |
| `200`       | Request successful           |
| `201`       | Project successfully created |
| `400`       | Invalid request data         |
| `404`       | Project not found            |
| `500`       | Internal server error        |

For example, requesting a project that does not exist returns:

```json
{
  "error": {
    "message": "Project not found"
  }
}
```

## Frontend and Backend Connection

The React frontend retrieves project data from the Express backend using `fetch`.

```ts
fetch("http://localhost:3001/api/projects")
  .then((response) => response.json())
  .then((data) => {
    setProjects(data);
  });
```

The data flow is:

```text
React Frontend
      ↓
    fetch()
      ↓
GET /api/projects
      ↓
Express Backend
      ↓
Projects Array
      ↓
JSON Response
      ↓
Zustand Store
      ↓
Projects Page
```

This replaces the previous hardcoded frontend project array with data provided by the backend API.

## API Testing

API endpoints were tested using **Thunder Client**.

Tests include:

* Retrieving all projects with `GET`
* Retrieving individual projects with `GET`
* Creating valid projects with `POST`
* Rejecting invalid POST requests using Zod
* Deleting projects with `DELETE`
* Handling requests for projects that do not exist


