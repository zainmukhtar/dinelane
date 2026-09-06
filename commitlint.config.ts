import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "feat", // new feature
        "fix", // bug fix
        "docs", // documentation changes
        "style", // formatting, no code meaning change
        "refactor", // code change that's neither a fix nor a feature
        "perf", // performance improvement
        "test", // adding or correcting tests
        "build", // changes to build system or dependencies
        "ci", // CI configuration changes
        "chore", // other changes, no src/test modification
        "revert", // reverts a previous commit
      ],
    ],
  },
};

export default Configuration;
