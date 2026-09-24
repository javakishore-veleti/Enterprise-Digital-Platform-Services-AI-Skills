# Developer Installation

## GitHub Packages

The package is published as:

```text
@javakishore-veleti/enterprise-digital-platform-services-ai-skills
```

Configure the GitHub npm registry:

```properties
@javakishore-veleti:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_TOKEN}
```

Install:

```bash
npm install -g @javakishore-veleti/enterprise-digital-platform-services-ai-skills@beta --registry=https://npm.pkg.github.com
edp-ai-skills install
```

Update:

```bash
npm update -g @javakishore-veleti/enterprise-digital-platform-services-ai-skills --registry=https://npm.pkg.github.com
edp-ai-skills update
```

Validate:

```bash
edp-ai-skills doctor
```

The default developer-machine installation directory is `~/.enterprise-digital-platform-ai`.

Service repositories should contain only their `.digital-platform-ai/` service context; the shared enterprise skill library remains installed centrally on the developer machine.
