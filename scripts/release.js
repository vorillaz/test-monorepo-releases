const fs = require("fs");
const semanticRelease = require("semantic-release");

(async function () {
  try {
    const result = await semanticRelease({
      // The branches to release from
      branches: ["main", { name: "canary", prerelease: true }],
      // Plugins
      plugins: [
        ["@semantic-release/commit-analyzer"],
        [
          "@semantic-release/release-notes-generator",
          {
            preset: "conventionalcommits",
            presetConfig: {
              types: [
                { type: "feat", section: "Features" },
                { type: "fix", section: "Bug Fixes" },
                { type: "chore", section: "Chores", hidden: false },
                { type: "docs", section: "Documentation", hidden: false },
                { type: "style", section: "Styles", hidden: false },
                { type: "refactor", section: "Refactors", hidden: false },
                { type: "perf", section: "Performance", hidden: false },
                { type: "test", section: "Tests", hidden: false },
              ],
            },
          },
        ],
        // https://github.com/semantic-release/git
        [
          "@semantic-release/git",
          {
            message:
              "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
          },
        ],
        "@semantic-release/github",
      ],
    });
  } catch (error) {
    console.error(error);
    console.log("An error occurred while running semantic-release");
    process.exitCode = 1;
  }
})();
