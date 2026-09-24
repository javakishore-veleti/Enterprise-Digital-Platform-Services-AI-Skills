# Verification Standard

Investigate before answering.

- Inspect relevant evidence before identifying root cause.
- Separate observed evidence from inference.
- State unknowns when evidence is insufficient.
- Do not treat a symptom as proof of root cause.
- Do not expose credentials, secrets, JWTs, or access tokens.

A `RedisTimeoutException` is evidence of a timeout. It is not automatically evidence that Redis is the root cause.

**Confidence is not evidence.**
