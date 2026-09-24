# AWS ElastiCache Redis Skills

Enterprise Digital Platform AI skills for Amazon ElastiCache using **Redis OSS or Valkey-compatible workloads**.

## Entry Points
- `aws-elasticache-redis-inspect-runtime`
- `aws-elasticache-redis-diagnose-runtime`

## Architecture and Scale
- `aws-elasticache-redis-analyze-serverless`
- `aws-elasticache-redis-analyze-replication-group`
- `aws-elasticache-redis-analyze-global-datastore`
- `aws-elasticache-redis-analyze-sharding`

## Caching and Performance
- `aws-elasticache-redis-analyze-cache`
- `aws-elasticache-redis-analyze-memory`
- `aws-elasticache-redis-analyze-eviction`
- `aws-elasticache-redis-analyze-performance`
- `aws-elasticache-redis-analyze-connections`
- `aws-elasticache-redis-analyze-session-state`

## Application and Messaging Patterns
- `aws-elasticache-redis-analyze-spring-boot`
- `aws-elasticache-redis-analyze-streams`
- `aws-elasticache-redis-analyze-pubsub`
- `aws-elasticache-redis-analyze-locking`
- `aws-elasticache-redis-analyze-transactions`

## Security and Networking
- `aws-elasticache-redis-analyze-iam-auth`
- `aws-elasticache-redis-analyze-networking`
- `aws-elasticache-redis-analyze-encryption`

## Resilience, Observability and Cost
- `aws-elasticache-redis-analyze-snapshots`
- `aws-elasticache-redis-analyze-cloudwatch`
- `aws-elasticache-redis-analyze-cost`

## Infrastructure as Code and Migration
- `aws-elasticache-redis-analyze-terraform`
- `aws-elasticache-redis-analyze-cloudformation`
- `aws-elasticache-redis-analyze-migration`

All public skills use the `aws-elasticache-redis-` prefix. This deliberately distinguishes Amazon ElastiCache from other AWS Redis/Valkey-compatible services such as Amazon MemoryDB.

Important platform rules:
- Standard ElastiCache replicas use asynchronous replication.
- Global Datastore cross-region replication is asynchronous.
- IAM authentication requires supported Redis OSS/Valkey versions and TLS.
- Serverless and node-based caches have different configuration surfaces.
- Verify engine/version/topology before assuming a parameter, feature, or module is available.
