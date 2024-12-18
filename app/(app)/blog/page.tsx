import BlogScreen from "@/modules/blog/templates";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog | Salih.codes",
  description:
    "Read my latest blog posts about web development, programming, and technology.",
};

export default function BlogPage() {
  return <BlogScreen />;
}
