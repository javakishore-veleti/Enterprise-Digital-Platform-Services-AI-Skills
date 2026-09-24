---
name: atlas-analyze-terraform
description: Analyze Terraform using the MongoDB Atlas provider for projects, deployments, users, networking, private endpoints, backup, search, and other Atlas resources. Use for Atlas IaC review, drift, or deployment failures.
---

# Analyze Atlas Terraform

1. Locate MongoDB Atlas provider configuration and relevant resources/data sources.
2. Inspect project, deployment, networking, users, backup, search, and integration configuration.
3. Compare Terraform intent with live Atlas state.
4. Identify drift, replacement risk, provider-version issues, and dependency ordering.
5. Never expose Atlas API credentials or sensitive Terraform state.
6. Do not plan/apply production changes without explicit authorization.

## Output
- Terraform Scope
- Intended Atlas State
- Drift/Replacement Risks
- Security/Configuration Findings
- Recommended Action
