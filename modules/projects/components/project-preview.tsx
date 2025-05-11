import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Project } from "@/lib/types/project";
import Link from "next/link";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={project.link} className="block h-full">
      <Card className="flex h-full flex-col transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <CardHeader>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h2>
        </CardHeader>

        <CardContent className="grow">
          <p className="text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};
