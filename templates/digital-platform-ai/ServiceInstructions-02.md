# Service Instructions 02 - Diagnostics and Troubleshooting

When diagnosing this service:

1. Inspect the current application repository.
2. Inspect the corresponding operations repository.
3. Determine the target environment.
4. Retrieve relevant logs, traces, and metrics.
5. Correlate failures using request or trace identifiers.
6. Follow downstream dependencies when evidence indicates the failure may be downstream.
7. Investigate before identifying a root cause.

## Constraints

- Never expose credentials or tokens.
- Do not modify production resources unless explicitly authorized.
- Separate observed evidence from inference.
- Report unknowns when evidence is insufficient.
