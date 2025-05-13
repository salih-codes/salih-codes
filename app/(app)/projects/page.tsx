import type { Metadata } from "next";
import React from "react";
import ProjectsScreen from "@/modules/projects/templates";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const metadata: Metadata = {
  title: "Projects | Salih.codes",
  description: "Showcase of my latest projects and work.",
};

export default async function ProjectsPage() {
  const payload = await getPayload({ config: configPromise });

  const projects = await payload.find({
    collection: "projects",
  });

  return <ProjectsScreen projects={projects.docs} />;
}
