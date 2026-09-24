---
name: analyze-cache
description: Analyze Redis behavior for latency, timeouts, connection issues, memory pressure, cache misses, hot keys, key patterns, and dependency symptoms. Use when a service investigation involves Redis errors, degraded cache behavior, suspected cache-related latency, or when Redis must be confirmed or ruled out as a root cause.
---

# Analyze Cache

1. Read service metadata and dependency configuration from `.digital-platform-ai/` when present.
2. Identify the Redis instance, environment, service usage pattern, and reported symptom.
3. Inspect relevant runtime evidence such as:
   - latency
   - connection counts
   - timeouts
   - memory pressure
   - evictions
   - hit/miss behavior
   - key distribution or hot-key indicators when available
4. Correlate Redis signals with application and DataDog evidence.
5. Do not infer Redis root cause from application timeout exceptions alone.
6. Separate Redis-side evidence from application-side symptoms.
7. Never expose values that may contain sensitive application data.

## Output

Return:

- Redis Findings
- Supporting Evidence
- Whether Redis Is Confirmed, Contributing, or Not Yet Proven
- Recommended Next Investigation
