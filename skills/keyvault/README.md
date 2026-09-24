# Azure Key Vault Skills

Enterprise Digital Platform AI skills for Azure Key Vault and Managed HSM.

## Entry Points
- `keyvault-inspect-vault`
- `keyvault-diagnose-runtime`

## Identity and Access
- `keyvault-analyze-rbac`
- `keyvault-analyze-access-policy`
- `keyvault-analyze-managed-identity`

## Network and Protection
- `keyvault-analyze-networking`
- `keyvault-analyze-recovery`
- `keyvault-analyze-diagnostics`

## Secrets, Keys and Certificates
- `keyvault-analyze-secrets`
- `keyvault-analyze-keys`
- `keyvault-analyze-certificates`
- `keyvault-analyze-rotation`
- `keyvault-analyze-managed-hsm`
- `keyvault-analyze-cmk`

## Application and Platform Integration
- `keyvault-analyze-aks-csi`
- `keyvault-analyze-spring-boot`
- `keyvault-analyze-github-actions`
- `keyvault-analyze-azure-devops`

## Infrastructure as Code
- `keyvault-analyze-terraform`
- `keyvault-analyze-bicep-arm`

All public skill names use the `keyvault-` prefix.

Managed HSM is treated separately from a standard Key Vault vault: control-plane access uses Azure RBAC while the Managed HSM data plane uses Managed HSM local RBAC.

The operating rule is strict: identifiers and references may be inspected; secret values, private keys, certificates with private material, and tokens must never be exposed in skill output.
