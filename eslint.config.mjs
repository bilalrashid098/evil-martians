import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // allow 'any'
      "react/no-unescaped-entities": "off", // allow unescaped apostrophes
      "@typescript-eslint/no-unused-vars": "off", // allow unused vars
      "react-hooks/exhaustive-deps": "off", // skip exhaustive deps warnings
    },
  },
];

export default eslintConfig;
