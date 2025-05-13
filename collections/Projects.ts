import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "image",
              type: "upload",
              required: true,
              relationTo: "media",
            },
            {
              name: "content",
              type: "richText",
              required: true,
            },
          ],
          label: "Content",
        },
      ],
    },

    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    ...slugField(),
    {
      name: "type",
      type: "radio",
      admin: {
        position: "sidebar",
      },
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
        { label: "Employer", value: "employer" },
      ],
      required: true,
    },
    {
      name: "stack",
      type: "relationship",
      relationTo: "skills-and-tools",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "contribution",
      type: "radio",
      admin: {
        position: "sidebar",
      },
      options: [
        { label: "solo", value: "solo" },
        { label: "team", value: "team" },
      ],
      required: true,
    },
    {
      name: "github",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "website",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "client",
      type: "relationship",
      relationTo: "clients",
      admin: {
        position: "sidebar",
      },
      hasMany: false,
    },
    {
      name: "clientTestimonial",
      admin: {
        position: "sidebar",
      },
      type: "textarea",
    },
    {
      name: "completionStatus",
      admin: {
        position: "sidebar",
      },
      type: "radio",
      options: [
        { label: "In Progress", value: "in_progress" },
        { label: "Completed", value: "completed" },
        { label: "On Hold", value: "on_hold" },
      ],
      required: true,
    },
  ],
};
