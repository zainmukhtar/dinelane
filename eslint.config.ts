import type { Linter } from "eslint";
import { config as baseConfig } from "@repo/eslint-config/base";

const config: Linter.Config[] = [
  ...baseConfig,
  {
    ignores: ["**/dist/**", "**/.next/**", "**/node_modules/**"],
  },
];

export default config;
