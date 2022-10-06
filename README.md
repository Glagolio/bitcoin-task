# NextJS for Gitlab Pages

A NextJS project working with Gitlab Pages, created using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Learn more about GitLab Pages at https://pages.gitlab.io and the official
documentation https://docs.gitlab.com/ce/user/project/pages/.

## Development
After executing `npm install`, just run `npm run dev`. You'll see the result on [http://localhost:3000](http://localhost:3000).

## Deployment
Everything is deploying automatically thanks to the `.gitlab-ci.yml` file:

```yml
image: node:lts

cache:
  paths:
    - node_modules/

pages:
  before_script:
    # Clean public folder
    - find public -mindepth 1 -maxdepth 1 -type d | xargs rm -rf
    - find public -type f -name "*.html" | xargs rm -rf
    # Install packages
    - npm install
  script:
    # Build application and move content to public folder
    - npm run publish
    - mv out/* public
  after_script:
    # Cleanup
    - rm -rf out
  artifacts:
    paths:
      - public
  only:
    - master
```

The `publish` command is just a shorthand for `build && export` (see scripts in `package.json`).

It has to be noticed that the `next.config.js` has to be configured as follows, in order to keep assets paths fine:

```javascript
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/next-gitlab-pages/' : '',
  trailingSlash: true
}
```
# bitcoin-task
