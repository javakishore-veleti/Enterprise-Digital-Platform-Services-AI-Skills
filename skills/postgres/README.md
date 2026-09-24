# Azure PostgreSQL Skills

Enterprise Digital Platform AI skills for **Azure Database for PostgreSQL Flexible Server**.

## Entry Points
- `postgres-inspect-server`
- `postgres-diagnose-runtime`

## Availability, Backup and Scaling
- `postgres-analyze-ha`
- `postgres-analyze-backup-pitr`
- `postgres-analyze-read-replicas`
- `postgres-analyze-compute-storage`

## Security and Networking
- `postgres-analyze-networking`
- `postgres-analyze-entra-auth`
- `postgres-analyze-cmk`

## Database Performance
- `postgres-analyze-query`
- `postgres-analyze-indexes`
- `postgres-analyze-locks`
- `postgres-analyze-pgbouncer`
- `postgres-analyze-vacuum-bloat`
- `postgres-analyze-monitoring`

## Migration and Lifecycle
- `postgres-analyze-migration`
- `postgres-analyze-oracle-modernization`
- `postgres-analyze-upgrade`

## Extensions, Vector and AI
- `postgres-analyze-extensions`
- `postgres-analyze-pgvector`
- `postgres-analyze-diskann`
- `postgres-analyze-azure-ai`
- `postgres-analyze-local-ai`
- `postgres-analyze-postgis`
- `postgres-analyze-graph`

## Application and Infrastructure
- `postgres-analyze-spring-boot`
- `postgres-analyze-terraform`
- `postgres-analyze-bicep-arm`

All public skills use the `postgres-` prefix.

This family is intentionally centered on Azure Database for PostgreSQL Flexible Server. Azure-specific extensions, storage capabilities, migration services, AI integrations, and preview features must be verified against the deployed PostgreSQL version, Azure region, and current product lifecycle before recommendation.

Route Azure Key Vault CMK investigations to `keyvault-*`, Datadog-specific telemetry to `datadog-*`, and generic Spring Boot issues to `spring-boot-*`.
