import type { Metadata } from "next";
import React from "react";
import ProjectsScreen from "@/modules/projects/templates";

export const metadata: Metadata = {
  title: "Projects | Salih.codes",
  description: "Showcase of my latest development projects and work.",
};

export default function ProjectsPage() {
  return <ProjectsScreen />;
}
