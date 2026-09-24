# Enterprise Digital Platform Services AI Skills

Central repository for reusable AI engineering standards, technology skills, harness adapters, and service integration templates across Digital Platform Services.

## Operating Model

This repository implements a Prompt Engineering Operating Model built around six controls:

- Instructions
- Context
- Reasoning
- Tools
- Execution
- Verification

The design separates reusable enterprise capability from service-specific context:

- **Enterprise Digital Platform AI Skills** define **HOW** AI works with technologies.
- **.digital-platform-ai/** in every service Git repository defines **WHAT / WHERE / INSTRUCTIONS** for that service.
- **Application and runtime systems** provide the **EVIDENCE**.

## Repository Structure

- `standards/` - Prompting, reasoning, tool-use, and verification standards
- `skills/` - Reusable technology skills
- `harnesses/` - Harness-specific integration guidance
- `templates/digital-platform-ai/` - Standard template for service repositories
- `docs/` - Installation, operating model, and service integration documentation

## Distribution

Planned package:

```bash
npm install -g @enterprise/digital-platform-services-ai-skills
```

## Developer Experience

Developers continue working inside the service repository using their preferred supported AI harness.

Examples:

- `/trace-request`
- `/diagnose-failure`
- `/analyze-query`
- `/diagnose-aks`
- `/analyze-redis`
- `/analyze-deployment`

**Standardize the capability, not the AI client.**
