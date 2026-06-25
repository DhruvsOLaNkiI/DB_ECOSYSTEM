# Graph Report - DB_ECOSYSTEM  (2026-06-25)

## Corpus Check
- 17 files · ~15,801 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 59 nodes · 74 edges · 7 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dbf6564c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `Navbar()` - 5 edges
3. `ProductLogo()` - 4 edges
4. `EcosystemIntro()` - 2 edges
5. `ECOSYSTEM_DATA` - 2 edges
6. `DBAssets()` - 2 edges
7. `DBExpo()` - 2 edges
8. `DBLiquid()` - 2 edges
9. `private` - 1 edges
10. `dev` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (7 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (8): DBExpo(), EVENT_DETAILS, EXPLORE_CATEGORIES, fadeInUp, HIGHLIGHTS, INTERACTION_ICONS, PROJECT_INTERACTIONS, staggerContainer

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (6): Navbar(), TABS, DBLiquid(), fadeInUp, staggerContainer, STEPS

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (7): AUDIENCES, BENEFITS, DBAssets(), fadeInUp, SERVICES, staggerContainer, STEPS

### Community 3 - "Community 3"
Cohesion: 0.22
Nodes (6): EcosystemIntro(), ORBIT_ICONS, PRODUCT_LABELS, ProductLogo(), ECOSYSTEM_DATA, HOME_TAB

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (8): devDependencies, serve, vite, @vitejs/plugin-react, name, private, type, version

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (7): dependencies, framer-motion, gsap, ogl, react, react-dom, react-router-dom

### Community 6 - "Community 6"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, start

## Knowledge Gaps
- **37 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+32 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 5` to `Community 4`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Why does `scripts` connect `Community 6` to `Community 4`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _37 weakly-connected nodes found - possible documentation gaps or missing edges._