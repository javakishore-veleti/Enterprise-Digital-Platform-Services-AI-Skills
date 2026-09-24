---
name: atlas-analyze-performance-advisor
description: Analyze MongoDB Atlas Performance Advisor findings, slow query patterns, suggested indexes, namespace activity, and supporting metrics. Use when Atlas has generated performance recommendations that require engineering validation.
---

# Analyze Performance Advisor

1. Collect the relevant advisor findings and time window.
2. Map recommendations to actual query shapes and application flows.
3. Validate suggested indexes against existing indexes, writes, storage, and selectivity.
4. Correlate advisor findings with deployment metrics and application latency.
5. Reject recommendations that lack workload evidence.
6. Do not apply recommendations automatically.

## Output
- Advisor Findings
- Workload Validation
- Existing Index Comparison
- Expected Tradeoffs
- Recommended Action
