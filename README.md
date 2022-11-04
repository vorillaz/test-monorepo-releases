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