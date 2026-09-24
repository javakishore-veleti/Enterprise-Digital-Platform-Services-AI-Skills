---
name: atlas-analyze-migration
description: Analyze migrations from self-managed MongoDB or other supported sources to MongoDB Atlas, including topology, version compatibility, networking, data movement, validation, cutover, rollback, and application changes. Use for Atlas adoption or migration planning.
---

# Analyze Atlas Migration

1. Inventory source topology, MongoDB version, size, indexes, users, sharding, application drivers, and operational constraints.
2. Identify supported Atlas migration/data-movement approach for the source and target.
3. Resolve target cloud/regions/tier, networking, security, and backup before cutover.
4. Define data validation, replication/lag checks, application connection changes, and cutover gates.
5. Define rollback before migration.
6. Do not execute production cutover without explicit authorization.

## Output
- Source/Target Topology
- Compatibility Gaps
- Migration/Cutover Plan
- Validation/Rollback
- Recommended Sequence
