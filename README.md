# HelloWorld Node.js and React app (coder-react)

### Instructions

1. Click Open in Coder
1. Authenticate into Coder and a Node.JS Docker workspace is built with populated parameter for the Node React repo

</br>

##### coder-oss.demo.coder.com as a Kubernetes pod

[![Open in Coder](https://coder-oss.demo.coder.com/open-in-coder.svg)](https://coder-oss.demo.coder.com/templates/pod-with-code-server/workspace?mode=auto&param.CPU+cores=2&param.Memory+%28__+GB%29=4&param.PVC+storage+size=10&param.Container+Image=codercom%2Fenterprise-node%3Aubuntu&param.Source+Code+Repository+%28optional%29=https%3A%2F%2Fgithub.com%2Fsharkymark%2Fcoder-react&param.Dotfiles+URL+%28optional%29=)

</br>

##### eks-v2.demo.coder.com as a Kubernetes pod
[![Open in Coder](https://eks-v2.demo.coder.com/open-in-coder.svg)](https://eks-v2.demo.coder.com/templates/pod-with-code-server/workspace?mode=auto&param.CPU+cores=2&param.Memory+%28__+GB%29=4&param.PVC+storage+size=10&param.Container+Image=codercom%2Fenterprise-node%3Aubuntu&param.Source+Code+Repository+%28optional%29=https%3A%2F%2Fgithub.com%2Fsharkymark%2Fcoder-react&param.Dotfiles+URL+%28optional%29=)

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
