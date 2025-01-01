import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "post",
  access: {
    read: () => true,
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
      defaultValue: new Date(),
      required: true,
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
