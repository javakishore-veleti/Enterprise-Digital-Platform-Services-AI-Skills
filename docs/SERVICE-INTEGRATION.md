# Service Integration

Every service Git repository should contain a `.digital-platform-ai/` folder.

```text
.digital-platform-ai/
├── service.yaml
├── dependencies.yaml
├── environments.yaml
├── authentication.yaml
├── observability.yaml
├── ServiceInstructions-01.md
├── ServiceInstructions-02.md
└── ServiceInstructions-03.md
```

## Responsibilities

- YAML files contain structured service configuration and facts.
- Markdown files contain service-specific AI instructions.
- Secrets and generated credentials never belong in Git.

The Enterprise Digital Platform AI skill reads this context before driving application, operations, dependency, and runtime investigation.
