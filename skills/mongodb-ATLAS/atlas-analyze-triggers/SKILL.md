---
name: atlas-analyze-triggers
description: Analyze MongoDB Atlas Triggers and related serverless event workflows where available, including database and scheduled triggers, function execution, authentication, retries, and downstream integrations. Use for existing Atlas trigger workloads or modernization planning.
---

# Analyze Atlas Triggers

1. Confirm the requested trigger capability is available for the target Atlas project and current product lifecycle.
2. Identify trigger type, watched namespace or schedule, function/action, authentication, and downstream dependencies.
3. Inspect execution history, failures, retries, and duplicate/idempotency behavior.
4. Evaluate operational ownership and migration path when the feature is deprecated or end-of-life.
5. Do not create new dependencies on retired capabilities.
6. Never expose secrets.

## Output
- Capability/Lifecycle Status
- Trigger Topology
- Execution Evidence
- Modernization Risk
- Recommended Action
