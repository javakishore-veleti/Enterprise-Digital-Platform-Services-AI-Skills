# Spring Boot Capability Model

The Spring Boot skill family is intentionally split by capability rather than stored under one generic `skills/spring-boot/` folder.

Capability families:

- `skills/spring-boot-core/`
- `skills/spring-boot-web/`
- `skills/spring-boot-reactive/`
- `skills/spring-boot-security/`
- `skills/spring-boot-data/`
- `skills/spring-boot-cache/`
- `skills/spring-boot-messaging/`
- `skills/spring-boot-integration/`
- `skills/spring-boot-batch/`
- `skills/spring-boot-cloud/`
- `skills/spring-boot-observability/`
- `skills/spring-boot-actuator/`
- `skills/spring-boot-resilience/`
- `skills/spring-boot-testing/`
- `skills/spring-boot-ai/`
- `skills/spring-boot-graphql/`
- `skills/spring-boot-grpc/`
- `skills/spring-boot-session/`
- `skills/spring-boot-modulith/`
- `skills/spring-boot-native/`
- `skills/spring-boot-scheduling/`
- `skills/spring-boot-diagnostics/`

## Naming Rule

Public slash skills must identify both Spring Boot and the capability when needed for global uniqueness.

Examples:

- `/spring-boot-diagnose-failure`
- `/spring-boot-security-trace-authentication`
- `/spring-boot-data-analyze-transaction`
- `/spring-boot-observability-trace-request`
- `/spring-boot-kafka-...` should not be created here; Kafka-specific platform behavior belongs in the Kafka capability family.

## Ownership Rule

Spring Boot capability skills own framework and application behavior.

Platform families own platform-specific behavior:

- AKS -> `aks-*`
- Datadog -> `datadog-*`
- Redis -> `redis-*`
- PostgreSQL -> `postgres-*`
- MongoDB -> `mongodb-*`
- Kafka -> `kafka-*`
- Event Hubs -> `eventhub-*`

Cross-stack diagnosis composes these skills rather than duplicating platform knowledge.
