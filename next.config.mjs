import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

export default withContentCollections(nextConfig);
