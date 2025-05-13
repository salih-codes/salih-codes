import React from "react";
import { ProjectCard } from "../components/project-preview";
import type { Project } from "@/payload-types";

export default function ProjectsScreen({ projects }: { projects: Project[] }) {
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
