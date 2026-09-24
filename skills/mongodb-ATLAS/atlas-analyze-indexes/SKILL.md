---
name: atlas-analyze-indexes
description: Analyze MongoDB Atlas index strategy and Performance Advisor recommendations, including compound, partial, TTL, wildcard, text, and other applicable indexes, usage, selectivity, redundancy, and write/storage cost. Use for Atlas index optimization.
---

# Analyze Atlas Indexes

1. Inventory indexes and relevant query shapes.
2. Inspect Performance Advisor/index recommendations as evidence, not automatic instructions.
3. Evaluate selectivity, compound-prefix ordering, sort coverage, and redundancy.
4. Consider write amplification, storage, and working-set impact.
5. Validate recommendations against business query patterns before applying them.
6. Do not create or drop production indexes without explicit authorization.

## Output
- Index Inventory
- Advisor Evidence
- Coverage/Gaps
- Cost/Risk
- Recommended Action
