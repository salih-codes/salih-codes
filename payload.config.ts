// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import path from "node:path";
import { buildConfig } from "payload";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { BlogPosts } from "./collections/BlogPosts";
import { SkillsAndTools } from "./collections/SkillsAndTools";
import { Projects } from "./collections/Projects";
import { Clients } from "./collections/Clients";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, BlogPosts, SkillsAndTools, Projects, Clients],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({
      collections: ["pages"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => `Mohammed Salih — ${doc.title}`,
      generateDescription: ({ doc }) => doc.excerpt,
    }),
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
