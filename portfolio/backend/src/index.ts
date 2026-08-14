import express from "express";
import cors from "cors";
import { z } from "zod";

const app = express();

const PORT = 3001;

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
}

let projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "My personal developer portfolio website.",
    techStack: ["React", "TypeScript", "Vite"],
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "UAV Swarm",
    description: "A project exploring coordinated UAV swarm technology.",
    techStack: ["Python"]
  }
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio API is running!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/api/projects", (req, res) => {
  res.status(200).json(projects);
});

app.get("/api/projects/:id", (req, res) => {
  const id = Number(req.params.id);

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return res.status(404).json({
      error: {
        message: "Project not found"
      }
    });
  }

  return res.status(200).json(project);
});

app.delete("/api/projects/:id", (req, res) => {
  const id = Number(req.params.id);

  const projectIndex = projects.findIndex(
    (project) => project.id === id
  );

  if (projectIndex === -1) {
    return res.status(404).json({
      error: {
        message: "Project not found"
      }
    });
  }

  projects.splice(projectIndex, 1);

  return res.status(200).json({
    message: "Project deleted successfully"
  });
});

const ProjectSchema = z.object({
  title: z.string().min(1).max(100),

  description: z.string().min(10).max(500),

  techStack: z.array(z.string()).min(1),

  liveUrl: z.string().url().optional(),

  githubUrl: z.string().url()
});

app.post("/api/projects", (req, res) => {
  const result = ProjectSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: {
        message: "Invalid project data",
        details: result.error.issues
      }
    });
  }

  const newProject: Project = {
    id: Date.now(),
    ...result.data
  };

  projects.push(newProject);

  return res.status(201).json(newProject);
});