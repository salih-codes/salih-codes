import type { Metadata } from "next";
import { getServerSideURL } from "./get-url";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  description: "Full stack developer portfolio site for Mohammed Salih.",
  images: [
    {
      url: `${getServerSideURL()}/open-graph-image.png`,
    },
  ],
  siteName: "Mohammed Salih",
  title: "Mohammed Salih",
};

export const mergeOpenGraph = (
  og?: Metadata["openGraph"],
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
