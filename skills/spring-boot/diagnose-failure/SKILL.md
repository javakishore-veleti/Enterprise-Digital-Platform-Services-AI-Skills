---
name: diagnose-failure
description: Diagnose failures in Spring Boot services by inspecting the current service repository, .digital-platform-ai metadata, logs, traces, runtime signals, downstream dependencies, and related ops configuration. Use for HTTP 4xx/5xx errors, exceptions, startup failures, dependency failures, latency regressions, and production incident investigation.
---

# Diagnose Failure

Start from the current service repository.

1. Read `.digital-platform-ai/service.yaml`, `dependencies.yaml`, `environments.yaml`, `observability.yaml`, and relevant `ServiceInstructions-*.md` files when present.
2. Identify the target environment and corresponding ops repository.
3. Inspect relevant Spring Boot code paths before making code-level claims.
4. Retrieve runtime evidence through available platform and observability tools.
5. Follow downstream dependencies only when evidence indicates they are involved.
6. Run independent evidence collection in parallel when possible.
7. Separate:
   - observed evidence
   - inference
   - unknowns
8. Do not identify a root cause until evidence supports it.
9. Do not modify production resources unless the user explicitly authorizes the change.

## Output

Return:

- Root Cause
- Evidence
- Affected Components
- Recommended Action
- Remaining Unknowns

Keep the final response concise unless the user requests deeper detail.
