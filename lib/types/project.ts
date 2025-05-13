import type { Media as MediaType } from "@/payload-types";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: MediaType;
  tags?: string[];
  website: URL;
  github: URL;
};
