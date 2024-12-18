"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SlidersHorizontal } from "lucide-react";

type Resource = {
  id: string;
  title: string;
  description: string;
  topics: string[];
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  programmingLanguages: string[];
  isPaid: boolean;
  price?: string;
  link: string;
};

const resources: Resource[] = [
  {
    id: "1",
    title: "Complete React Course 2024",
    description:
      "Comprehensive guide to modern React development including hooks, context, and best practices.",
    topics: ["Frontend", "React", "Web Development"],
    skillLevel: "Beginner",
    programmingLanguages: ["JavaScript", "TypeScript"],
    isPaid: true,
    price: "$89.99",
    link: "https://example.com/react-course",
  },
  {
    id: "2",
    title: "JavaScript Algorithms and Data Structures",
    description:
      "Master the fundamentals of computer science with JavaScript implementations.",
    topics: ["Algorithms", "Data Structures"],
    skillLevel: "Intermediate",
    programmingLanguages: ["JavaScript"],
    isPaid: false,
    link: "https://example.com/js-algo",
  },
  {
    id: "3",
    title: "Advanced TypeScript Patterns",
    description:
      "Deep dive into TypeScript's type system and advanced patterns.",
    topics: ["TypeScript", "Backend"],
    skillLevel: "Advanced",
    programmingLanguages: ["TypeScript"],
    isPaid: true,
    price: "$49.99",
    link: "https://example.com/ts-patterns",
  },
  // Add more demo resources as needed
];

const topics = [
  "Frontend",
  "Backend",
  "DevOps",
  "Algorithms",
  "Data Structures",
  "React",
  "Web Development",
  "TypeScript",
];
const skillLevels = ["Beginner", "Intermediate", "Advanced"];
const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "Go",
  "Rust",
];

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <Link href={resource.link} className="block h-full">
      <Card className="flex h-full flex-col transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
        <CardHeader>
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {resource.title}
            </h2>
            {resource.isPaid && (
              <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                {resource.price}
              </span>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex flex-col space-y-4">
          <p className="text-zinc-600 dark:text-zinc-400">
            {resource.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {resource.topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
              {resource.skillLevel}
            </span>
            {resource.programmingLanguages.map((lang) => (
              <span
                key={lang}
                className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
              >
                {lang}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const FilterSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <Checkbox id={item} />
            <label
              htmlFor={item}
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const Filters = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Price</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="free" />
            <label
              htmlFor="free"
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              Free
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="paid" />
            <label
              htmlFor="paid"
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              Paid
            </label>
          </div>
        </div>
      </div>

      <FilterSection title="Topics" items={topics} />
      <FilterSection title="Skill Level" items={skillLevels} />
      <FilterSection
        title="Programming Languages"
        items={programmingLanguages}
      />
    </div>
  );
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Resources
        </h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
          Curated collection of learning resources for developers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Mobile Filter Drawer */}
        <div className="lg:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Filters</DrawerTitle>
              </DrawerHeader>
              <div className="px-4">
                <Filters />
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:block">
          <Filters />
        </div>

        {/* Resources Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
