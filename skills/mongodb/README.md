# MongoDB Skills

Enterprise Digital Platform AI skills for **self-managed MongoDB** running on virtual machines, bare metal, or Kubernetes.

This family intentionally focuses on self-managed MongoDB rather than MongoDB Atlas.

## Entry Points
- `mongodb-inspect-cluster`
- `mongodb-diagnose-runtime`

## Replication and Sharding
- `mongodb-analyze-replica-set`
- `mongodb-analyze-sharding`
- `mongodb-analyze-shard-key`
- `mongodb-analyze-balancer`

## Query, Index and Data Modeling
- `mongodb-analyze-query`
- `mongodb-analyze-indexes`
- `mongodb-analyze-schema`
- `mongodb-analyze-change-streams`

## Storage, Performance and Host
- `mongodb-analyze-wiredtiger`
- `mongodb-analyze-host-os`
- `mongodb-analyze-storage`
- `mongodb-analyze-connections`
- `mongodb-analyze-locks-transactions`
- `mongodb-analyze-profiler-telemetry`

## Security and Lifecycle
- `mongodb-analyze-security`
- `mongodb-analyze-encryption`
- `mongodb-analyze-backup-recovery`
- `mongodb-analyze-upgrade`

## Application and Platform Integration
- `mongodb-analyze-kubernetes`
- `mongodb-analyze-spring-boot`
- `mongodb-analyze-monitoring`

All public skills use the `mongodb-` prefix.

Version-sensitive operating-system, balancer, storage, security, and upgrade recommendations must be checked against the deployed MongoDB version rather than applying historical tuning advice blindly.

For Kubernetes-hosted MongoDB, use this family for database behavior and route AKS infrastructure problems to `aks-*`. Route Datadog-specific telemetry investigations to `datadog-*`.
