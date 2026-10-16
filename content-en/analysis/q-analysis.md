---
date: 2025-11-30
title: "The hidden geometry of \"us\": finding hidden structure in complex systems (an introduction to Q-Analysis)"
description: "Q-Analysis, a mathematical method by Ronald Atkin, sees relations as multidimensional simplices instead of pairwise edges. A fully worked example, and how it differs from a graph."
translation: تحلیل-و-تحلیل-سیستم‌ها/هندسه-پنهانِ-«ما»---کشف-ساختارهای-پنهان-در-سیستم‌های-پیچیده---درآمدی-بر-Q-Analysis
lang: en
---

> [!question] What are we looking at here?
> When the relation among several things is "one thing" and does not break down into pairwise edges, how do we see its structure?

# Why a graph is not enough to understand a city or an organisation

In systems analysis we often fall into the "dot-and-line trap". Looking at a social network, a city or an organisation, we are used to seeing a graph: entities (nodes) joined by lines (edges). But a real relation is sometimes not pairwise. Two people may be colleagues, club-mates and neighbours all at once. That is not a thin line; it is a multidimensional thing. In a graph all of it collapses into one edge, and what remains is only "connected".

**R. H. Atkin**, a British mathematician at the University of Essex, built a method in the early 1970s that keeps those dimensions: **Q-Analysis**, or connectivity analysis. He took his inspiration from Clifford Dowker's 1952 paper on the homology of relations, and his main books are *Mathematical Structure in Human Affairs* (1974), *Combinatorial Connectivities in Social Systems* (1977) and *Multidimensional Man* (1981). He showed applications to urban structure and to organisations, including a study of the University of Essex community.

# The concepts

Three things need to be known precisely:

| Concept | What it means | Example |
|---|---|---|
| **Vertex** | A basic member or property | "coffee", "wi-fi", "live music" |
| **Simplex** | A set of vertices that together make one thing | A café with its four features; a committee with its members |
| **Simplicial complex** | All the simplices together | The whole set of cafés in a city |

A simplex with n vertices is an (n−1)-dimensional shape: two vertices make a segment, three a triangle, four a tetrahedron. If a café has four features, it is not a point; it is a tetrahedron (a three-dimensional simplex). One note on wording: "face" is a part of a simplex; a vertex should not be called a "face".

The base matrix of the method is the **incidence matrix**: rows are simplices (say, cafés), columns are vertices (features), and 1 means "this simplex has this vertex".

# Q-nearness and structure

Two simplices are **q-near** if they share at least q+1 vertices (that is, a shared q-dimensional face). A chain of simplices in which every consecutive pair is q-near forms a **q-connected component**. The analysis means counting, at each level q (from 0 to the highest dimension), how many q-connected components there are. Put these counts side by side and you get the **structure vector**: $Q = [Q_n, \ldots, Q_1, Q_0]$, where $Q_q$ is the number of q-connected components.

# A complete example

Four cafés and five features:

| Café | Features (vertices) | Simplex dimension |
|---|---|---|
| A | coffee, shared workspace, wi-fi | 2 |
| B | coffee, wi-fi, live music | 2 |
| C | wi-fi, books | 1 |
| D | books | 0 |

Shared vertices: A and B share two vertices (coffee and wi-fi), so they are 1-near. A and C, and B and C, share only wi-fi; C and D share only books. These are 0-near. A and D, and B and D, share nothing.

Now we count components:

- **q = 2** (only the three-vertex simplices, A and B): to be 2-near, three shared vertices are needed and they have none, so there are **two components**: {A}, {B}.
- **q = 1** (simplices with at least two vertices: A, B, C): A and B are 1-near and C shares two vertices with neither, so there are **two components**: {A,B}, {C}.
- **q = 0** (all four cafés): any two cafés sharing even one vertex are linked, and everything reaches everything through wi-fi and books, so there is **one component**.

The structure vector is $Q = [2, 2, 1]$ (from q=2 down to q=0).

These numbers say something structural. At the deepest level, A and B are not one. Only at level 1 do the two stick together, with C left outside. And the whole set is a single piece only through "shallow" features (one wi-fi, one book); without those two features the café district falls apart. That is the "hidden structure": the plain graph would only have said "everyone is connected".

(This is a toy example. In practice you run it on real data and compute the structure vector with software, and you must read the result together with knowledge of the context.)

# How does it differ from a graph and network analysis?

A graph is the special case of dimension 1, that is, only pairwise relations. Q-Analysis keeps a many-party relation in one piece and asks where, and at which level of connectivity, the structure breaks. It is also related to social network analysis (SNA), but SNA has its own independent roots (sociometry, graph theory); it does not come from Atkin. Today the idea of "higher-order relations" shows up again in topological data analysis and hypergraph networks.

To me the main value of the method for a systems analyst is a change of question: instead of "what is connected to what?", "how many things are together, how strongly, and where does the structure break?"

#connectivity_analysis #Q_Analysis #simplex #network_analysis #complexity #systems_analysis

Related: [[analysis/analysis-destroys-wholes|Analysing destroys wholes]] (does analysis really destroy wholes, or only the reduced, graph-based kind?), [[conflict/multi-perspective-observability|Multi-perspective observability]] and [[analysis/theory-first-or-data-first|Theory first or data first]] (the same choice: a theoretical frame in advance, or discovering structure inside the data?).
