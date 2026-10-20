---
date: 2026-10-20
title: "The multi-product, multi-period model in network design"
description: "When we have several products and periods: inventory, shared capacity, fixed and variable costs, taxes and exchange rates; the structure of a comprehensive model."
translation: روش‌های-تصمیم-و-بهینه‌سازی/طراحی-شبکه‌ی-زنجیره‌ی-تأمین/03-مدل-چندمحصولی-و-چنددوره‌ای-در-طراحی-شبکه
lang: en
tags:
  - network-design
  - multi-product
  - multi-period
  - mathematical-programming
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Supply Chain Network Design". I rewrote the explanations in my own words and recomputed the numerical example. The course's main sources include Watson et al. (2013), Chopra and Meindl, and Dekker et al. (2004).

## Why is the basic model not enough?

The basic [[02-multi-stage-framework-from-region-to-exact-site|location model]] sees one product and one period. In practice:

- **Several products** use the same lines, warehouses and fleet (shared capacity).
- **Demand changes over time** (seasonal, growth) and decisions such as adding capacity are **multi-period**.
- **Inventory** carries over between periods.

## Data

**Fixed costs** of facilities (plant, warehouse, vendor), **capacities** (plants, warehouses, roads and vehicles), the **transport cost** of products from plant to distribution centres and from these to customers, production and holding costs, and in an international network **duties** on transport, **taxes** on product or profit, **exchange rates** and prices.

## Model structure

Indices: product $p$, period $t$, facility $j$, customer $i$.

- **Decision variables:** $y_{jt}$ (facility $j$ is open in period $t$), $x_{ijpt}$ (quantity of product $p$ from $j$ to $i$ in period $t$) and $I_{jpt}$ (inventory).
- **Objective:** the sum (discounted) of fixed, production, transport, inventory and shortage-penalty costs; or **maximising profit after tax**.
- **Constraints:**
  - **Inventory balance:** $I_{jpt} = I_{jp,t-1} + \text{inflow} - \text{outflow}$
  - **Shared capacity:** $\sum_p a_p\, (\text{flow}_{jpt}) \le s_j\, y_{jt}$ (each product takes a share of capacity)
  - **Meeting demand** in each period for each product
  - **Open-and-close logic:** once a facility is opened, it stays until the end of the horizon.

The result is a large MIP, solved with **commercial solvers** and sometimes **heuristics**, or with **decomposition** (such as Lagrangian or Benders) for large sizes.

## Decisions seen only in the multi-period case

- **Timing of capacity expansion** (in which year do we build a new warehouse?)
- **Shifting production** between plants when costs or taxes change.
- **Safety stock** for peak seasons.

## My note

With the addition of time and product the model becomes very large; so the modeller's decision matters: **what detail do I drop?** Aggregation of products and customers and the size of periods affect tractability and credibility more than any algorithm.

Related: [[04-multi-objective-design-cost-sustainability-resilience|Multi-objective network design: cost, sustainability and resilience]].

#multi_product #multi_period #network_design
