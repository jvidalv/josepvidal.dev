import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["old/**", ".next/**", ".content-collections/**", "node_modules/**"],
  },
];

export default eslintConfig;
