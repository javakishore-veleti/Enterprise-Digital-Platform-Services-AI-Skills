---
name: atlas-analyze-failover
description: Analyze MongoDB Atlas managed high availability and failover behavior across replica sets, availability zones, and regions, including election events, application reconnection, read/write settings, and resilience. Use for availability incidents or DR testing.
---

# Analyze Atlas Failover

1. Map deployment nodes/regions and application connection behavior.
2. Inspect recent elections, node unavailability, maintenance, and regional events.
3. Correlate failover with driver retry, read preference, write concern, and connection-pool behavior.
4. Evaluate whether the application tolerated managed failover as designed.
5. Distinguish database election time from application recovery time.
6. Do not force failover in production without explicit authorization.

## Output
- HA Topology
- Failover Timeline
- Application Recovery
- Resilience Findings
- Recommended Action
