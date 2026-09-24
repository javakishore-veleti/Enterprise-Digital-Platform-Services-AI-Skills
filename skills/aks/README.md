# AKS Skills

Enterprise Digital Platform AI skills for Azure Kubernetes Service.

## Runtime and Scope
- `aks-inspect-runtime` - general AKS router/orchestrator
- `aks-inspect-cluster` - clusters and node pools
- `aks-inspect-namespace` - namespace state and constraints
- `aks-inspect-pods` - pod/container health

## Deployment
- `aks-analyze-deployment` - Deployment/ReplicaSet and descriptors
- `aks-diagnose-rollout` - end-to-end rollout diagnosis
- `aks-analyze-blue-green` - blue-green deployments
- `aks-inspect-container-images` - image version/pull/digest
- `aks-inspect-startup-jobs` - Jobs, init containers, hooks
- `aks-inspect-argocd` - Argo CD sync, health, drift
- `aks-inspect-terraform` - AKS infrastructure-as-code context

## Networking and Mesh
- `aks-analyze-service-networking` - Services, endpoints, DNS, ingress, network policy
- `aks-analyze-istio` - Istio routing, mTLS, policy, Envoy
- `aks-inspect-sidecars` - sidecar lifecycle and impact

## Storage
- `aks-analyze-storage` - PV, PVC, StorageClass, mounts, attachments

All public AKS skill names use the `aks-` prefix to keep the enterprise slash-skill namespace unambiguous across AKS, EKS, GKE, OpenShift, and on-prem Kubernetes.

All skills use the current service repository and `.digital-platform-ai/` metadata as service-specific context. Runtime mutations require explicit authorization.
