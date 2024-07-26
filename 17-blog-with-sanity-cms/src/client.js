import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "9r9b9jmc",
  dataset: "production",
  apiVersion: "2024-07-26",
  useCdn: false,
});
