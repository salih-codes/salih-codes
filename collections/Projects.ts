import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
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
      type: "richText",
      required: true,
    },
    {
      name: "publishedAt",
      type: "date",
    },
    { name: "image", type: "upload", required: true, relationTo: "media" },
    {
      name: "type",
      type: "radio",
      options: [
        {
          label: "Personal",
          value: "personal",
        },
        {
          label: "Client",
          value: "client",
        },
        {
          label: "Open Source",
          value: "open-source",
        },
        { label: "employer", value: "employer" },
      ],
      required: true,
    },
    {
      name: "stack",
      type: "relationship",
      relationTo: "skills-and-tools",
      hasMany: true,
    },
    {
      name: "contribution",
      type: "radio",
      options: [
        { label: "solo", value: "solo" },
        { label: "team", value: "team" },
      ],
      required: true,
    },
    {
      name: "github",
      type: "text",
    },
    {
      name: "website",
      type: "text",
    },
    {
      name: "client",
      type: "relationship",
      relationTo: "clients",
      hasMany: false,
    },
  ],
};
