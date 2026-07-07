# Graph Report - DB_ECOSYSTEM  (2026-07-07)

## Corpus Check
- 23 files · ~20,219 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 108 nodes · 142 edges · 13 communities (11 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `07d2cb15`
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
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `Supaste — Clipboard History Manager for Mac` - 12 edges
2. `Footer()` - 8 edges
3. `Navbar()` - 8 edges
4. `scripts` - 5 edges
5. `ProductLogo()` - 4 edges
6. `App()` - 2 edges
7. `EcosystemIntro()` - 2 edges
8. `hexToRgba()` - 2 edges
9. `ElectricBorder()` - 2 edges
10. `hexToRGB()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (13 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.18
Nodes (10): Navbar(), TABS, Contact(), CONTACT_CHANNELS, fadeInUp, staggerContainer, fadeInUp, Privacy() (+2 more)

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (8): DBExpo(), EVENT_DETAILS, EXPLORE_CATEGORIES, fadeInUp, HIGHLIGHTS, INTERACTION_ICONS, PROJECT_INTERACTIONS, staggerContainer

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (12): Footer(), About(), fadeInUp, OFFERINGS, staggerContainer, AUDIENCES, BENEFITS, DBAssets() (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.16
Nodes (8): EcosystemIntro(), ORBIT_ICONS, PRODUCT_LABELS, ProductLogo(), RotatingText, App(), ECOSYSTEM_DATA, HOME_TAB

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (21): dependencies, framer-motion, gsap, ogl, react, react-dom, react-router-dom, serve (+13 more)

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (4): DBLiquid(), fadeInUp, staggerContainer, STEPS

### Community 6 - "Community 6"
Cohesion: 0.15
Nodes (12): Accessibility, Brand, Component Rule Expectations, Guideline Authoring Workflow, Mission, Quality Gates, Required Output Structure, Rules: Do (+4 more)

## Knowledge Gaps
- **58 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+53 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Footer()` connect `Community 2` to `Community 0`, `Community 1`, `Community 3`, `Community 5`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `Navbar()` connect `Community 0` to `Community 1`, `Community 2`, `Community 3`, `Community 5`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _58 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._