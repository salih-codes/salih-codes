import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import type { Project, SkillsAndTool } from "@/payload-types";
import { Media } from "@/components/media";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card className="flex h-full flex-col transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Media fill priority resource={project.image} />
        </div>

        <CardHeader>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h2>
        </CardHeader>

        <CardFooter className="flex flex-wrap gap-2">
          {project.stack?.map((tool: any) => (
            <span
              key={tool.id}
              className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {tool.title}
            </span>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};
