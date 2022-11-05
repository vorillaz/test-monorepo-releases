const fs = require("fs");

const semanticRelease = require("semantic-release");
(async function () {
  try {
    const result = await semanticRelease({
      // The branches to release from
      branches: ["main", { name: "canary", prerelease: true }],
      // Dry run mode
      dryRun: true,
      // Plugins
      plugins: ["@semantic-release/commit-analyzer"],
    });
    if (result) {
      console.log(result);
      console.log("Next release version:", result.nextRelease.version);
      console.log("Next release gitTag:", result.nextRelease.gitTag);
      //   Cause the release version should be passed across steps in the github workflow we need to write it to a file
      fs.writeFileSync("release-version.txt", result.nextRelease.version);
      fs.writeFileSync("release-gitTag.txt", result.nextRelease.gitTag);

      //   move on
    } else {
      console.log("No release");
      process.exitCode = 0;
    }
  } catch (error) {
    console.error(error);
    console.log("An error occurred while running semantic-release");
    process.exitCode = 1;
  }
})();
