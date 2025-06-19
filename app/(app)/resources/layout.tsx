import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Some valuable resources",
  description:
    "Curated resources for learning web development and programming.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
