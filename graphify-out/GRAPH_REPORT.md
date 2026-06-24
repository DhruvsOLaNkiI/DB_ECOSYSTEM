# Graph Report - DB_ECOSYSTEM  (2026-06-24)

## Corpus Check
- 17 files · ~15,793 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 38 nodes · 54 edges · 5 communities (4 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `94318f12`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]

## God Nodes (most connected - your core abstractions)
1. `Navbar()` - 5 edges
2. `ProductLogo()` - 4 edges
3. `EcosystemIntro()` - 2 edges
4. `ECOSYSTEM_DATA` - 2 edges
5. `DBAssets()` - 2 edges
6. `DBExpo()` - 2 edges
7. `DBLiquid()` - 2 edges
8. `ORBIT_ICONS` - 1 edges
9. `TABS` - 1 edges
10. `PRODUCT_LABELS` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (5 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (8): DBExpo(), EVENT_DETAILS, EXPLORE_CATEGORIES, fadeInUp, HIGHLIGHTS, INTERACTION_ICONS, PROJECT_INTERACTIONS, staggerContainer

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (6): Navbar(), TABS, DBLiquid(), fadeInUp, staggerContainer, STEPS

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (7): AUDIENCES, BENEFITS, DBAssets(), fadeInUp, SERVICES, staggerContainer, STEPS

### Community 4 - "Community 4"
Cohesion: 0.40
Nodes (4): EcosystemIntro(), ORBIT_ICONS, PRODUCT_LABELS, ProductLogo()

## Knowledge Gaps
- **20 isolated node(s):** `ORBIT_ICONS`, `TABS`, `PRODUCT_LABELS`, `HOME_TAB`, `SERVICES` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Navbar()` connect `Community 1` to `Community 0`, `Community 2`, `Community 3`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `ProductLogo()` connect `Community 4` to `Community 0`, `Community 3`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **What connects `ORBIT_ICONS`, `TABS`, `PRODUCT_LABELS` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._