# Graph Report - DB_ECOSYSTEM  (2026-07-07)

## Corpus Check
- 21 files · ~19,322 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 100 nodes · 124 edges · 13 communities (11 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `052a55bc`
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
2. `Footer()` - 6 edges
3. `Navbar()` - 6 edges
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
Cohesion: 0.14
Nodes (14): Footer(), Navbar(), TABS, EVENT_DETAILS, EXPLORE_CATEGORIES, fadeInUp, HIGHLIGHTS, INTERACTION_ICONS (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (6): Contact(), CONTACT_CHANNELS, fadeInUp, INITIAL_FORM, staggerContainer, SUBJECTS

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (7): AUDIENCES, BENEFITS, DBAssets(), fadeInUp, SERVICES, staggerContainer, STEPS

### Community 3 - "Community 3"
Cohesion: 0.15
Nodes (9): EcosystemIntro(), ORBIT_ICONS, PRODUCT_LABELS, ProductLogo(), RotatingText, DBExpo(), App(), ECOSYSTEM_DATA (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (12): devDependencies, vite, @vitejs/plugin-react, name, private, scripts, build, dev (+4 more)

### Community 5 - "Community 5"
Cohesion: 0.22
Nodes (9): dependencies, framer-motion, gsap, ogl, react, react-dom, react-router-dom, serve (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.15
Nodes (12): Accessibility, Brand, Component Rule Expectations, Guideline Authoring Workflow, Mission, Quality Gates, Required Output Structure, Rules: Do (+4 more)

## Knowledge Gaps
- **54 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+49 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 5` to `Community 4`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _54 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1437908496732026 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.14619883040935672 - nodes in this community are weakly interconnected._