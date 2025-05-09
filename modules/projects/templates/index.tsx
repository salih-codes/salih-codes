import type { Project } from "@/lib/types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description:
      "A modern dashboard for managing online stores built with Next.js and TailwindCSS.",
    image: "/projects/dashboard.jpg",
    tags: ["Web Development", "Next.js", "Dashboard"],
    link: "/projects/ecommerce-dashboard",
  },
  // {
  //   id: "2",
  //   title: "Mobile Fitness App",
  //   description:
  //     "Cross-platform fitness tracking application built with React Native.",
  //   image: "/projects/fitness.jpg",
  //   tags: ["Mobile Development", "React Native", "iOS/Android"],
  //   link: "/projects/fitness-app",
  // },
  // {
  //   id: "3",
  //   title: "AI Content Generator",
  //   description: "AI-powered content generation tool using OpenAI's GPT-3.",
  //   image: "/projects/ai-generator.jpg",
  //   tags: ["AI/ML", "Web Development", "API Integration"],
  //   link: "/projects/ai-generator",
  // },
  // {
  //   id: "4",
  //   title: "Real-time Chat Application",
  //   description: "WebSocket-based chat application with real-time messaging.",
  //   image: "/projects/chat-app.jpg",
  //   tags: ["Web Development", "Real-time", "WebSocket"],
  //   link: "/projects/chat-app",
  // },
  // {
  //   id: "5",
  //   title: "Portfolio Website Template",
  //   description: "Customizable portfolio template for developers.",
  //   image: "/projects/portfolio.jpg",
  //   tags: ["Web Development", "Template", "Design"],
  //   link: "/projects/portfolio-template",
  // },
  // {
  //   id: "6",
  //   title: "Task Management System",
  //   description: "Collaborative task management platform for teams.",
  //   image: "/projects/task-management.jpg",
  //   tags: ["Web Development", "Productivity", "Team"],
  //   link: "/projects/task-management",
  // },
];

import React from "react";
import { ProjectCard } from "../components/project-preview";

export default function ProjectsScreen() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
          A showcase of my recent development work and side projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
