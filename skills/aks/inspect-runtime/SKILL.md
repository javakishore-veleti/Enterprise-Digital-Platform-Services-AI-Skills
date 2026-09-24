---
name: inspect-runtime
description: Inspect Azure Kubernetes Service runtime state for a service, including deployments, pods, restarts, events, configuration, resource pressure, health probes, and rollout state. Use when investigating service health, deployment failures, pod restarts, startup issues, runtime regressions, or production incidents involving AKS.
---

# Inspect Runtime

1. Read `.digital-platform-ai/service.yaml`, `environments.yaml`, and service instructions when present.
2. Identify the target AKS environment, namespace, deployment, and service.
3. Inspect deployment and pod state.
4. Check:
   - pod readiness and liveness
   - restart counts
   - recent events
   - rollout state
   - CPU and memory pressure
   - configuration references
   - image/version changes
5. Compare current state with expected deployment configuration from the ops repository when available.
6. Run independent runtime checks in parallel.
7. Report observations before drawing conclusions.
8. Do not mutate cluster resources unless explicitly authorized.

## Output

Return:

- Runtime State
- Evidence
- Deployment/Pod Findings
- Likely Impact
- Recommended Next Check
