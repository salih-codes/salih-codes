import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { BlogPost } from "@/lib/types/blog";
import { formatDistance } from "date-fns";
import Link from "next/link";
import React from "react";

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.id}`} className="block h-full">
      <Card className="flex h-full flex-col transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
        <CardHeader>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {post.title}
          </h2>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-zinc-600 dark:text-zinc-400">{post.intro}</p>
        </CardContent>

        <CardFooter className="mt-auto flex flex-col items-start space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex w-full items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
            <div className="flex items-center space-x-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-6 w-6 rounded-full"
              />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {post.author.name}
              </span>
            </div>
            <time className="text-sm text-zinc-500 dark:text-zinc-500">
              {formatDistance(post.publishedAt, new Date(), {
                addSuffix: true,
              })}
            </time>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
