# Azure Redis Skills

Enterprise Digital Platform AI skills for Azure Managed Redis and migration/operations of legacy Azure Cache for Redis.

## Entry Points
- `redis-inspect-runtime`
- `redis-diagnose-runtime`

## Caching and Runtime
- `redis-analyze-cache`
- `redis-analyze-memory`
- `redis-analyze-eviction`
- `redis-analyze-performance`
- `redis-analyze-clustering`
- `redis-analyze-connections`
- `redis-analyze-spring-boot`
- `redis-analyze-session-state`

## Messaging and Atomic Operations
- `redis-analyze-streams`
- `redis-analyze-pubsub`
- `redis-analyze-transactions`

## Reliability and Platform
- `redis-analyze-persistence`
- `redis-analyze-geo-replication`
- `redis-analyze-networking`
- `redis-analyze-observability`

## Security and FinOps
- `redis-analyze-entra-auth`
- `redis-analyze-security`
- `redis-analyze-cost`

## AI and Search
- `redis-analyze-vector-search`
- `redis-analyze-semantic-cache`

## Modernization
- `redis-analyze-migration`

All public skills use the `redis-` prefix. In this repository, this family is Azure-specific and targets Azure Managed Redis while retaining legacy Azure Cache for Redis diagnosis and migration coverage.

Do not assume every Redis capability is available on every tier or clustering policy. Verify actual service configuration before relying on modules, vector search, active geo-replication, persistence, or other tier-dependent features.
