# Azure Event Hubs Skills

Enterprise Digital Platform AI skills for Azure Event Hubs.

## Entry Points
- `eventhub-inspect-namespace`
- `eventhub-diagnose-runtime`

## Architecture and Capacity
- `eventhub-analyze-partitioning`
- `eventhub-analyze-throughput`
- `eventhub-analyze-geo-replication`

## Producers and Consumers
- `eventhub-analyze-producer`
- `eventhub-analyze-consumer`
- `eventhub-analyze-consumer-groups`
- `eventhub-analyze-checkpointing`

## Contracts, Storage and Security
- `eventhub-analyze-schema-registry`
- `eventhub-analyze-capture`
- `eventhub-analyze-security`

## Application and Protocol Integration
- `eventhub-analyze-kafka-protocol`
- `eventhub-analyze-spring-boot-integration`
- `eventhub-analyze-databricks-streaming`
- `eventhub-analyze-stream-analytics`

All public skill names use the `eventhub-` prefix.

The skill family uses current processor/checkpoint/partition-ownership concepts rather than relying on legacy Event Processor Host terminology.

The core operating principle is to determine whether a failure originates with the producer, partition/capacity layer, Event Hubs namespace, consumer/checkpoint layer, contract/security configuration, or downstream processing before recommending changes.
