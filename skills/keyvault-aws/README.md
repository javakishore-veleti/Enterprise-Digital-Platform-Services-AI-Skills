# AWS KMS Skills

Enterprise Digital Platform AI skills for AWS Key Management Service.

## Entry Points
- `kms-inspect-key`
- `kms-diagnose-runtime`

## Authorization and Access
- `kms-analyze-key-policy`
- `kms-analyze-iam-access`
- `kms-analyze-grants`

## Key Lifecycle and Architecture
- `kms-analyze-rotation`
- `kms-analyze-multi-region`
- `kms-analyze-imported-key-material`
- `kms-analyze-custom-key-store`
- `kms-analyze-deletion-recovery`

## Cryptographic Application Patterns
- `kms-analyze-envelope-encryption`
- `kms-analyze-encryption-context`
- `kms-analyze-spring-boot`

## AWS Service Integrations
- `kms-analyze-service-cmk`
- `kms-analyze-secrets-manager`
- `kms-analyze-eks-integration`

## Infrastructure as Code and Audit
- `kms-analyze-terraform`
- `kms-analyze-cloudformation`
- `kms-analyze-cloudtrail`

All public skill names use the `kms-` prefix.

Important architecture distinctions:
- Multi-Region keys share key material and key ID across related regions, while policies, grants, aliases, tags, and enabled state remain independently managed per region.
- Imported key material and custom key stores have different feature constraints.
- Custom key stores do not support several standard KMS features such as automatic rotation and multi-Region keys.
- Application patterns should prefer envelope encryption for payload data rather than direct KMS encryption of large application payloads.

Never expose plaintext data keys, imported key material, credentials, or sensitive cryptographic artifacts.
