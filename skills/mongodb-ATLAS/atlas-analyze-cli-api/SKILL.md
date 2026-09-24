---
name: atlas-analyze-cli-api
description: Analyze MongoDB Atlas CLI and Administration API workflows for project, deployment, networking, users, automation, and diagnostics. Use for scripted Atlas operations or API/CLI failures.
---

# Analyze Atlas CLI and API

1. Identify intended operation, organization/project, target resource, CLI/API version, and authentication method.
2. Inspect request parameters and resource identifiers.
3. Correlate API errors with Atlas permissions, resource state, and network conditions.
4. Prefer repeatable declarative IaC for stable infrastructure and CLI/API for appropriate operational workflows.
5. Treat destructive operations as requiring explicit authorization.
6. Never expose API keys or tokens.

## Output
- Operation Scope
- Authentication/Authorization
- Request/Resource Findings
- Failure Layer
- Recommended Action
