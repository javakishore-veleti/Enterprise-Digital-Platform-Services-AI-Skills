---
name: atlas-analyze-query-performance
description: Analyze MongoDB Atlas query performance using Query Profiler or Query Insights, explain plans, execution statistics, query shapes, indexes, resource metrics, and application latency. Use for slow-query investigations.
---

# Analyze Query Performance

1. Identify query shape, collection, filters, sort, projection, and application path.
2. Inspect Atlas query-performance evidence and `explain()` where appropriate.
3. Compare returned documents with examined keys/documents and identify inefficient stages.
4. Correlate query latency with deployment resources and application telemetry.
5. Route index-specific analysis to `atlas-analyze-indexes`.
6. Avoid expensive production diagnostics without considering impact.

## Output
- Query Shape
- Execution Evidence
- Resource Correlation
- Bottleneck
- Recommended Action
