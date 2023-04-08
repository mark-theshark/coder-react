# HelloWorld Node.js and React app (coder-react)

### Instructions

1. Click Open in Coder
1. Authenticate into Coder and a Node.JS Docker workspace is built with populated parameter for the Node React repo

</br>

[![Open in Coder](https://oss.demo.coder.com/open-in-coder.svg)](https://oss.demo.coder.com/templates/docker-o-i-c/workspace?param.Git%20Repo%20URL=https://github.com/sharkymark/coder-react)

</br>

### Known things

1. If `yarn start` fails, it may be you are on an older version of `node` - add this to the start script in `package.json`

```sh
  "scripts": {
    "start": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts start"
```

### Resources

[Coder docs on Open in Coder](https://coder.com/docs/v2/latest/templates/open-in-coder)

[Coder provider Git Auth docs](https://registry.terraform.io/providers/coder/coder/latest/docs/data-sources/git_auth)

[Coder docs to configure Git Auth](https://coder.com/docs/v2/latest/admin/git-providers)

[GitHub docs for creating an OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

[Terraform kreuzwerker Docker provider](https://registry.terraform.io/providers/kreuzwerker/docker/latest/docs/resources/container)
