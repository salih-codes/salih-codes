import type { BlogPost } from "@/lib/types/blog";
import React from "react";
import { BlogCard } from "../components/blog-preview";

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 14 and Server Components",
    intro:
      "Learn how to build modern web applications with Next.js 14's revolutionary server components and improved routing system.",
    publishedAt: new Date("2024-01-15"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: "2",
    title: "Mastering TypeScript: Advanced Types and Patterns",
    intro:
      "Deep dive into TypeScript's advanced type system, including conditional types, mapped types, and utility types.",
    publishedAt: new Date("2024-01-10"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: "3",
    title: "Building Beautiful UIs with Tailwind CSS",
    intro:
      "Explore the power of Tailwind CSS and learn how to create stunning user interfaces without writing custom CSS.",
    publishedAt: new Date("2024-01-05"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["CSS", "Tailwind", "UI Design"],
  },
  {
    id: "4",
    title: "React Performance Optimization Techniques",
    intro:
      "Learn practical techniques to optimize your React applications for better performance and user experience.",
    publishedAt: new Date("2023-12-28"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["React", "Performance", "Web Development"],
  },
  {
    id: "5",
    title: "Modern State Management with Zustand",
    intro:
      "Discover how Zustand simplifies state management in React applications with its minimal and powerful API.",
    publishedAt: new Date("2023-12-20"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["React", "State Management", "Zustand"],
  },
  {
    id: "6",
    title: "Building Accessible Web Applications",
    intro:
      "Essential guidelines and best practices for creating web applications that are accessible to everyone.",
    publishedAt: new Date("2023-12-15"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Accessibility", "Web Development", "HTML"],
  },
  {
    id: "7",
    title: "CSS Grid Mastery: Advanced Layout Techniques",
    intro:
      "Master CSS Grid to create complex and responsive layouts with ease.",
    publishedAt: new Date("2023-12-10"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["CSS", "Layout", "Web Design"],
  },
  {
    id: "8",
    title: "Testing React Applications with Vitest",
    intro:
      "Learn how to effectively test your React applications using Vitest, a modern testing framework.",
    publishedAt: new Date("2023-12-05"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Testing", "React", "Vitest"],
  },
  {
    id: "9",
    title: "API Design Best Practices with tRPC",
    intro:
      "Build type-safe APIs with tRPC and learn best practices for modern API design.",
    publishedAt: new Date("2023-11-28"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["API", "tRPC", "TypeScript"],
  },
  {
    id: "10",
    title: "Animation Techniques with Framer Motion",
    intro:
      "Create smooth and engaging animations in your React applications using Framer Motion.",
    publishedAt: new Date("2023-11-20"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Animation", "React", "Framer Motion"],
  },
  {
    id: "11",
    title: "Understanding React Server Components",
    intro:
      "Deep dive into React Server Components and how they change the way we build React applications.",
    publishedAt: new Date("2023-11-15"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["React", "Server Components", "Web Development"],
  },
  {
    id: "12",
    title: "Building a Design System with Tailwind and React",
    intro:
      "Learn how to create a consistent and maintainable design system using Tailwind CSS and React.",
    publishedAt: new Date("2023-11-10"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Design Systems", "Tailwind", "React"],
  },
  {
    id: "13",
    title: "Advanced Git Workflows for Teams",
    intro:
      "Master advanced Git techniques and workflows to improve team collaboration and code management.",
    publishedAt: new Date("2023-11-05"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Git", "Version Control", "Collaboration"],
  },
  {
    id: "14",
    title: "Web Security Best Practices",
    intro:
      "Essential security practices to protect your web applications from common vulnerabilities.",
    publishedAt: new Date("2023-10-28"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Security", "Web Development", "Best Practices"],
  },
  {
    id: "15",
    title: "Building Real-time Applications with WebSockets",
    intro:
      "Learn how to implement real-time features in your web applications using WebSockets.",
    publishedAt: new Date("2023-10-20"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["WebSockets", "Real-time", "JavaScript"],
  },
  {
    id: "16",
    title: "Micro-frontends with Module Federation",
    intro:
      "Explore micro-frontend architecture and implementation using Webpack Module Federation.",
    publishedAt: new Date("2023-10-15"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Micro-frontends", "Architecture", "Webpack"],
  },
  {
    id: "17",
    title: "State Machines in React with XState",
    intro:
      "Managing complex state and application logic with XState in React applications.",
    publishedAt: new Date("2023-10-10"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["React", "State Machines", "XState"],
  },
  {
    id: "18",
    title: "Building CLI Tools with Node.js",
    intro:
      "Create powerful command-line tools using Node.js and modern JavaScript.",
    publishedAt: new Date("2023-10-05"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Node.js", "CLI", "JavaScript"],
  },
  {
    id: "19",
    title: "Advanced React Patterns",
    intro:
      "Explore advanced React patterns and techniques to write better and more maintainable code.",
    publishedAt: new Date("2023-09-28"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["React", "Patterns", "Best Practices"],
  },
  {
    id: "20",
    title: "Web Performance Optimization",
    intro:
      "Comprehensive guide to optimizing web application performance and improving user experience.",
    publishedAt: new Date("2023-09-20"),
    author: {
      name: "Salih Öztekin",
      avatar: "/globe.svg",
    },
    tags: ["Performance", "Web Development", "Optimization"],
  },
];

export default function BlogScreen() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Blog
        </h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
          Thoughts on programming, web development, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
