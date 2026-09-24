---
name: search-evidence
description: Search and correlate DataDog logs, traces, metrics, request IDs, exceptions, and service signals as evidence for an engineering investigation. Use when diagnosing failures, latency, dependency issues, production incidents, or when a claim must be grounded in DataDog runtime evidence.
---

# Search Evidence

1. Read `.digital-platform-ai/observability.yaml` and service metadata when available.
2. Determine the service, environment, time window, correlation identifiers, and known symptoms.
3. Search logs, traces, and metrics relevant to the investigation.
4. Prefer correlation by trace ID, request ID, service name, endpoint, pod, deployment version, or exception signature.
5. Parallelize independent searches when they do not depend on one another.
6. Do not treat the first matching error as root cause.
7. Return evidence with timestamps and source context when available.
8. Distinguish:
   - observed runtime evidence
   - inferred relationship
   - unresolved questions

## Output

Return:

- Evidence Summary
- Correlated Signals
- Timeline
- Likely Next Investigation
- Unknowns

Never expose secrets, authorization headers, tokens, or credentials from logs.
