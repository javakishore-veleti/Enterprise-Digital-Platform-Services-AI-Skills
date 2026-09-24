# Amazon MSK Skills

Enterprise Digital Platform AI skills for Amazon Managed Streaming for Apache Kafka (Amazon MSK).

## Entry Points
- `msk-inspect-cluster`
- `msk-diagnose-runtime`

## Cluster Architecture and Capacity
- `msk-analyze-capacity`
- `msk-analyze-brokers`
- `msk-analyze-serverless`
- `msk-analyze-storage`
- `msk-analyze-topics-partitions`
- `msk-analyze-upgrade-maintenance`
- `msk-analyze-migration`

## Security and Networking
- `msk-analyze-networking`
- `msk-analyze-iam-auth`
- `msk-analyze-encryption`

## Kafka Applications
- `msk-analyze-producer`
- `msk-analyze-consumer`

## AWS Streaming Integrations
- `msk-analyze-connect`
- `msk-analyze-replicator`
- `msk-analyze-glue-schema`
- `msk-analyze-lambda`
- `msk-analyze-flink`
- `msk-analyze-data-delivery`

## Observability
- `msk-analyze-cloudwatch`
- `msk-analyze-open-monitoring`

## Infrastructure as Code
- `msk-analyze-terraform`
- `msk-analyze-cloudformation`

All public skill names use the `msk-` prefix.

Use these skills for AWS-managed Kafka concerns. Route portable Kafka semantics such as generic producer/consumer behavior, transactions, Streams, Connect internals, schema semantics, or protocol-level reasoning to the generic `kafka-*` family when AWS-specific behavior is not material.

Do not recommend self-managed broker/OS patching for Amazon MSK responsibilities that AWS manages.
