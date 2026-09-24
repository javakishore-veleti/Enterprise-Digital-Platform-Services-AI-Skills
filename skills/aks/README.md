# AKS Skills

Enterprise Digital Platform AI skills for Azure Kubernetes Service.

## Runtime and Scope
- `inspect-runtime` - general AKS router/orchestrator
- `inspect-cluster` - clusters and node pools
- `inspect-namespace` - namespace state and constraints
- `inspect-pods` - pod/container health

## Deployment
- `analyze-deployment` - Deployment/ReplicaSet and descriptors
- `diagnose-rollout` - end-to-end rollout diagnosis
- `analyze-blue-green` - blue-green deployments
- `inspect-container-images` - image version/pull/digest
- `inspect-startup-jobs` - Jobs, init containers, hooks
- `inspect-argocd` - Argo CD sync, health, drift
- `inspect-terraform` - AKS infrastructure-as-code context

## Networking and Mesh
- `analyze-service-networking` - Services, endpoints, DNS, ingress, network policy
- `analyze-istio` - Istio routing, mTLS, policy, Envoy
- `inspect-sidecars` - sidecar lifecycle and impact

## Storage
- `analyze-storage` - PV, PVC, StorageClass, mounts, attachments

All skills use the current service repository and `.digital-platform-ai/` metadata as service-specific context. Runtime mutations require explicit authorization.
