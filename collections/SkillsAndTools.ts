import type { CollectionConfig } from "payload";

export const SkillsAndTools: CollectionConfig = {
  slug: "skills-and-tools",
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
      name: "type",
      type: "radio",
      required: true,
      options: [
        {
          label: "Skill",
          value: "skill",
        },
        {
          label: "Tool",
          value: "tool",
        },
        {
          label: "Language",
          value: "language",
        },
        {
          label: "Framework",
          value: "framework",
        },
        {
          label: "Library",
          value: "library",
        },
        {
          label: "Database",
          value: "database",
        },
        {
          label: "Other",
          value: "other",
        },
      ],
    },
    { name: "image", type: "upload", required: true, relationTo: "media" },
  ],
};
