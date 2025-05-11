import type { CollectionConfig } from "payload";

export const Clients: CollectionConfig = {
  slug: "clients",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "website", type: "text", required: true },
    { name: "logo", type: "upload", relationTo: "media" },
  ],
};
