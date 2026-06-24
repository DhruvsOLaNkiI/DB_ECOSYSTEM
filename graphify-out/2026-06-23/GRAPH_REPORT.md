# Graph Report - DB_ECOSYSTEM  (2026-06-23)

## Corpus Check
- 26 files · ~25,369 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 172 nodes · 170 edges · 22 communities (15 shown, 7 thin omitted)
- Extraction: 95% EXTRACTED · 4% INFERRED · 1% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4485d30c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_App Shell & Data|App Shell & Data]]
- [[_COMMUNITY_Build Tooling|Build Tooling]]
- [[_COMMUNITY_Navigation & Assets Page|Navigation & Assets Page]]
- [[_COMMUNITY_Graphify Pipeline|Graphify Pipeline]]
- [[_COMMUNITY_Design System & Branding|Design System & Branding]]
- [[_COMMUNITY_Knowledge Graph Ops|Knowledge Graph Ops]]
- [[_COMMUNITY_React Dependencies|React Dependencies]]
- [[_COMMUNITY_Graph Query Tools|Graph Query Tools]]
- [[_COMMUNITY_Lightfall Effects|Lightfall Effects]]
- [[_COMMUNITY_Site Favicon|Site Favicon]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]

## God Nodes (most connected - your core abstractions)
1. `Supaste — Clipboard History Manager for Mac` - 12 edges
2. `What You Must Do When Invoked` - 11 edges
3. `/graphify` - 10 edges
4. `graphify reference: extra exports and benchmark` - 8 edges
5. `graphify Full Pipeline` - 8 edges
6. `Project Knowledge Graph (graphify-out/)` - 7 edges
7. `Navbar()` - 5 edges
8. `graphify reference: query, path, explain` - 5 edges
9. `Digital Broker` - 5 edges
10. `Supaste Clipboard History Manager for Mac` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Navigable Knowledge Graph Output` --semantically_similar_to--> `Project Knowledge Graph (graphify-out/)`  [INFERRED] [semantically similar]
  .claude/skills/graphify/SKILL.md → CLAUDE.md
- `Plus Jakarta Sans Typography` --semantically_similar_to--> `Inter Display Primary Font`  [INFERRED] [semantically similar]
  index.html → src/design.md
- `Project Knowledge Graph (graphify-out/)` --conceptually_related_to--> `Digital Broker`  [INFERRED]
  CLAUDE.md → index.html
- `Supaste Clipboard History Manager for Mac` --conceptually_related_to--> `Digital Broker`  [AMBIGUOUS]
  src/design.md → index.html
- `graphify claude install (CLAUDE.md Integration)` --rationale_for--> `Project Knowledge Graph (graphify-out/)`  [INFERRED]
  .claude/skills/graphify/references/hooks.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **graphify Pipeline Output Artifacts** — graphify_skill_graph_html, claude_graph_json, claude_graph_report [EXTRACTED 1.00]
- **Project Graph Query Tools** — claude_graphify_query, claude_graphify_path, claude_graphify_explain [EXTRACTED 1.00]

## Communities (22 total, 7 thin omitted)

### Community 0 - "App Shell & Data"
Cohesion: 0.08
Nodes (26): EcosystemIntro(), ORBIT_ICONS, ElectricBorder(), hexToRgba(), Navbar(), TABS, AUDIENCES, BENEFITS (+18 more)

### Community 1 - "Build Tooling"
Cohesion: 0.11
Nodes (18): dependencies, framer-motion, gsap, ogl, react, react-dom, react-router-dom, devDependencies (+10 more)

### Community 2 - "Navigation & Assets Page"
Cohesion: 0.14
Nodes (14): Part A - Structural extraction for code files, Part B - Semantic extraction (parallel subagents), Part C - Merge AST + semantic into final extraction, Step 0 - GitHub repos and multi-path merge (only if a URL or several paths), Step 1 - Ensure graphify is installed, Step 2.5 - Video and audio (only if video files detected), Step 2 - Detect files, Step 3 - Extract entities and relationships (+6 more)

### Community 3 - "Graphify Pipeline"
Cohesion: 0.22
Nodes (9): graphify Skill (/graphify), AST Structural Extraction (Code), Community Detection, EXTRACTED/INFERRED/AMBIGUOUS Audit Trail, God Nodes Analysis, graph.html Interactive Visualization, graphify Full Pipeline, LLM Semantic Extraction (Docs/Images) (+1 more)

### Community 4 - "Design System & Branding"
Cohesion: 0.25
Nodes (9): Digital Broker, Playfair Display Typography, Plus Jakarta Sans Typography, Vite React Entry (main.jsx), Component State Requirements (default, hover, focus, disabled), Inter Display Primary Font, Semantic Design Tokens, Supaste Clipboard History Manager for Mac (+1 more)

### Community 5 - "Knowledge Graph Ops"
Cohesion: 0.14
Nodes (14): graphify-out/graph.json, GRAPH_REPORT.md Architecture Report, graphify explain Command, graphify path Command, graphify query Command, graphify update Incremental Rebuild, Project Knowledge Graph (graphify-out/), graphify-out/wiki/index.md (+6 more)

### Community 6 - "React Dependencies"
Cohesion: 0.15
Nodes (12): Accessibility, Brand, Component Rule Expectations, Guideline Authoring Workflow, Mission, Quality Gates, Required Output Structure, Rules: Do (+4 more)

### Community 7 - "Graph Query Tools"
Cohesion: 0.20
Nodes (9): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Usage (+1 more)

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 13 - "Community 13"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 14 - "Community 14"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 15 - "Community 15"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 16 - "Community 16"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Ambiguous Edges - Review These
- `Digital Broker` → `Supaste Clipboard History Manager for Mac`  [AMBIGUOUS]
  src/design.md · relation: conceptually_related_to

## Knowledge Gaps
- **101 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+96 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Digital Broker` and `Supaste Clipboard History Manager for Mac`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Project Knowledge Graph (graphify-out/)` connect `Knowledge Graph Ops` to `Design System & Branding`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `graphify Full Pipeline` connect `Graphify Pipeline` to `Knowledge Graph Ops`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `What You Must Do When Invoked` connect `Navigation & Assets Page` to `Graph Query Tools`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _106 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell & Data` be split into smaller, more focused modules?**
  _Cohesion score 0.07657657657657657 - nodes in this community are weakly interconnected._
- **Should `Build Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._