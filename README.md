<!--  -->
Steps
- Add husky and setup conventional commits
```
    pnpm install --save-dev @commitlint/{config-conventional,cli} -w
    echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
    pnpm install husky --save-dev -w
    pnpx husky install
    pnpx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

- Bump version to all items

```
    # root
    pnpm version 1.2.2 --no-git-tag-version
```


<!-- Release workflow -->
1. On push on branch create a new release or prerelease
2. Get the new version and update the packages for all the packages
3. Add a new CI commit
4. Publish the release or the prerelease
5. Generate the changelog

6. 0n a new release / prerelease
7. Get the number
8. Publish the docker packages build and push on the version
9. Publish particles
