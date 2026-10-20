---
date: 2026-10-20
title: "The multi-stage framework: from region to exact site"
description: "Decision phases of network design, the mixed-integer capacitated location model, and the centre-of-gravity model with the Weiszfeld algorithm, with a worked example."
translation: روش‌های-تصمیم-و-بهینه‌سازی/طراحی-شبکه‌ی-زنجیره‌ی-تأمین/02-چارچوب-چندمرحله‌ای-طراحی-شبکه؛-از-منطقه-تا-مکان-دقیق
lang: en
tags:
  - network-design
  - facility-location
  - integer-programming
  - center-of-gravity
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Supply Chain Network Design". I rewrote the explanations in my own words and recomputed the numerical example. The course's main sources include Watson et al. (2013), Chopra and Meindl, and Dekker et al. (2004).

## Why several stages?

If we want to find the exact location of each warehouse on the map and simultaneously decide in which country to invest, the problem becomes unsolvable. So we go **from macro to micro**:

1. **Define strategy and data:** demand, costs, capacities, strategic constraints, **cost functions** (linear, step or piecewise linear: fixed and semi-fixed cost). We **cluster** customers by location and represent each cluster by one point so the problem becomes small.
2. **Configure facilities at the regional level:** in which regions are plants and warehouses, and which region is supplied from which? A mixed-integer model (MIP).
3. Identify **desirable sites** in the selected regions (infrastructure, labour, regulations).
4. **Choose the exact site** with models such as **centre of gravity**.

## The capacitated location MIP

Customer $i$ with demand $d_i$, candidate facility $j$ with capacity $s_j$, fixed cost $f_j$ and unit transport cost $c_{ij}$:

$$\min \; \sum_j f_j\, y_j + \sum_i \sum_j c_{ij}\, x_{ij}$$

subject to $\sum_j x_{ij} = d_i$ (all demand is met), $\sum_i x_{ij} \le s_j\, y_j$ (capacity only if the facility is opened), $x_{ij} \ge 0$ and $y_j \in \{0, 1\}$.

The binary variable $y_j$ is the "build or not" decision and $x_{ij}$ the flow. The course example: a petrochemical producer with international sales, with two kinds of plant, **high-capacity** (high fixed cost, low unit cost) and **low-capacity**, in different regions; the model is solved with tools such as Excel Solver, GAMS, AMPL or Python libraries (PuLP, OR-Tools). The optimal solution says which regions to open and what flow each gets. If there are **strategic requirements** (for instance a local presence in Europe), they are added as a constraint, and their cost (the difference from the solution without the constraint) becomes visible.

## Centre of gravity and the Weiszfeld method

If we have $n$ customers at coordinates $(x_i, y_i)$ with volume $v_i$, and transport cost is proportional to distance and volume, we want the facility's location:

- The **centre of gravity** (minimising squared distance) is simple: $\bar x = \sum v_i x_i / \sum v_i$. But the real cost is proportional to **distance**, not its square.
- **Weber's problem:** minimise $\sum v_i\, d_i(x, y)$; it has no closed form. The **Weiszfeld algorithm** (1937) is iterative: in each iteration it obtains the new coordinates from a weighted mean with weights $v_i/d_i$ and converges to the solution.

**Example:** five customers at $(0,0)$, $(10,0)$, $(0,10)$, $(10,10)$ and $(5,20)$ with volumes 100, 150, 200, 120, 80.
- Centre of gravity: $(4.77,\ 7.38)$ with total cost (volume × distance) ≈ 5035.5.
- Weiszfeld (60 iterations): $(3.62,\ 8.06)$ with cost ≈ 5008.7.

Both are close, but Weiszfeld lowers the real cost. In practice one must also consider **road** distance and the constraints of **suitable land**, so this is only a starting point.

## A warning

Location models often assume demand is certain. In practice there is **uncertainty**; for that, see [[04-multi-objective-design-cost-sustainability-resilience|multi-objective network design]] (stochastic and robust programming).

Related: [[01-supply-chain-network-design-concept-and-motives|Supply chain network design: concept and motives]].

#location #MIP #center_of_gravity
