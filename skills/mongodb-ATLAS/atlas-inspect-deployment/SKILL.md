---
name: atlas-inspect-deployment
description: Inspect MongoDB Atlas projects and database deployments including cloud provider, regions, topology, tier, autoscaling, networking, security, backup, search, and runtime health. Use as the primary Atlas entry point when the investigation domain is not yet known.
---

# Inspect Atlas Deployment

1. Read `.digital-platform-ai/mongodb-atlas.yaml`, service metadata, environments, and relevant instructions.
2. Resolve Atlas organization/project, deployment, cloud provider, regions, topology, and consuming applications.
3. Inspect deployment state, tier, autoscaling, replication/sharding, networking, security, backup, metrics, and recent changes.
4. Identify whether the issue is topology, scaling, network, access, query, search/vector, backup, federation, or application integration.
5. Route to focused `atlas-*` skills.
6. Do not mutate production Atlas resources unless explicitly authorized.

## Output
- Atlas Context
- Deployment Topology
- Runtime State
- Scope Assessment
- Recommended Next Skill
