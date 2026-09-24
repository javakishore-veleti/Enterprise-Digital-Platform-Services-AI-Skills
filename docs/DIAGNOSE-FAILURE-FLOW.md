# Diagnose Failure Flow

The first-generation cross-stack diagnosis flow uses five reusable skills:

1. Spring Boot `diagnose-failure`
2. DataDog `search-evidence`
3. AKS `inspect-runtime`
4. Redis `analyze-cache`
5. PostgreSQL `analyze-database`

The Spring Boot diagnosis begins in the current service repository and reads `.digital-platform-ai/` to determine service identity, dependencies, environments, observability, authentication references, and the corresponding ops repository.

Independent runtime evidence collection should execute in parallel when possible.

A common investigation may gather DataDog evidence, AKS runtime state, Redis metrics, PostgreSQL state, and repository changes before correlating findings.

The orchestration rule is:

- reusable skills define **HOW**
- `.digital-platform-ai/` defines **WHAT / WHERE / INSTRUCTIONS**
- application and runtime systems provide **EVIDENCE**

A symptom must not be promoted to root cause without supporting evidence.
