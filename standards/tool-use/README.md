# Tool Use Standard

Use tools when the answer depends on actual engineering state.

Typical evidence sources include:

- Source code
- Application configuration
- Operations repositories
- AKS runtime state
- DataDog logs, traces, and metrics
- Databases and caches
- Messaging platforms
- Key Vault references
- Dependent service APIs

Execution guidance:

- Run independent tool calls in parallel.
- Sequence calls when one result is required by the next.
- Retrieve runtime reality when runtime reality determines the answer.
