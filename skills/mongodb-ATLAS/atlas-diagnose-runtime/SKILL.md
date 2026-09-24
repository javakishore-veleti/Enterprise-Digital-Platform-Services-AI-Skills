---
name: atlas-diagnose-runtime
description: Diagnose MongoDB Atlas incidents end-to-end across deployment health, autoscaling, queries, indexes, connections, networking, access, search/vector search, backup, and application telemetry. Use when the failing Atlas layer is unknown.
---

# Diagnose Atlas Runtime

1. Resolve deployment, environment, application path, time window, and symptom.
2. Gather independent evidence in parallel from Atlas metrics/logs, query insights, application telemetry, networking, and recent Atlas changes.
3. Inspect deployment health, resource pressure, connections, query/index behavior, replication/sharding, and cloud connectivity.
4. Correlate the first abnormal Atlas signal with application failures.
5. Separate Atlas platform, database, network, cloud-provider, and application causes.
6. Route to focused `atlas-*` skills.
7. Do not treat an application timeout as proof Atlas is the root cause.

## Output
- Incident Scope
- First Confirmed Failure
- Atlas Evidence
- Failing Layer
- Recommended Action
- Remaining Unknowns
