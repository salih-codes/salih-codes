import { draftMode } from "next/headers";
import React, { cache } from "react";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import RichText from "@/components/rich-text";
import { Media } from "@/components/media";
import { CMSLink } from "@/components/link";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

const queryProjectBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "projects",
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export default async function ProjectDetailsPage({
  params: paramsPromise,
}: Args) {
  const { slug = "" } = await paramsPromise;
  // const url = `/posts/${slug}`;
  // console.log("url", url);
  const project = await queryProjectBySlug({ slug });

  const { image } = project;
  return (
    <article className="min-h-screen px-4 space-y-6">
      <div className="min-h-64 select-none">
        {image && typeof image !== "string" && (
          <Media
            priority
            imgClassName="max-h-full rounded-xl object-cover"
            resource={image}
          />
        )}
      </div>

      <div className="p-5 bg-muted rounded-lg">
        <h2 className="text-3xl font-semibold">{project.title}</h2>
        <Button asChild variant="link" className="p-0">
          <Link href={project.website as string} className="">
            Visit website <ArrowUpRight className="ml-2" />
          </Link>
        </Button>
        <h3 className="font-medium">
          Completion Status: {project.completionStatus}
        </h3>
      </div>

      <RichText
        className="mx-auto"
        data={project.content}
        enableGutter={false}
      />
    </article>
  );
}
