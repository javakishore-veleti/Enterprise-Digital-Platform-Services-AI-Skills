---
name: atlas-analyze-vector-search
description: Analyze MongoDB Atlas Vector Search for semantic retrieval and RAG, including embedding fields, vector indexes, dimensions, similarity functions, filters, ANN/ENN behavior, recall/latency, and retrieval quality. Use for Atlas vector-store design or incidents.
---

# Analyze Vector Search

1. Identify embedding model/version, vector dimensions, indexed path, similarity function, metadata filters, and retrieval objective.
2. Inspect vector index definition and deployment compatibility.
3. Evaluate retrieval latency and quality using representative queries and ground truth where available.
4. Separate embedding quality, filtering, index configuration, retrieval parameters, and LLM generation problems.
5. Evaluate hybrid retrieval when lexical and semantic signals are both useful.
6. Never treat a plausible generated answer as retrieval-quality evidence.

## Output
- Vector Architecture
- Index/Embedding Compatibility
- Retrieval Quality
- Latency/Recall Findings
- Recommended Action
