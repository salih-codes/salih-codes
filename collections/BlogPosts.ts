import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "publishedAt",
      type: "date",
    },

    { name: "image", type: "upload", required: true, relationTo: "media" },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      hasMany: true,
    },
  ],
};
