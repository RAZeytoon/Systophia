---
date: 2026-10-20
title: "Multi-objective network design: cost, sustainability and resilience"
description: "When response time, reliability, emissions and risk matter besides cost: the objectives, multi-objective solution methods, and sustainable and resilient supply chains."
translation: روش‌های-تصمیم-و-بهینه‌سازی/طراحی-شبکه‌ی-زنجیره‌ی-تأمین/04-طراحی-شبکه‌ی-چندهدفه؛-هزینه،-پایداری-و-تاب‌آوری
lang: en
tags:
  - network-design
  - multi-objective
  - sustainable-supply-chain
  - resilience
  - MODM
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Supply Chain Network Design". I rewrote the explanations in my own words and recomputed the numerical example. The course's main sources include Watson et al. (2013), Chopra and Meindl, and Dekker et al. (2004).

## From one objective to several

Network design usually starts with **minimum cost**. But the decision maker wants simultaneously:

- low **cost**,
- low **response time** (distance from the customer),
- high **reliability** (rate of meeting demand),
- low **environmental impact** (emissions, energy use),
- low **disruption risk**.

These conflict (more warehouses cut time and raise cost). **Multi-objective** models (MODM) make this explicit and give a **set of efficient solutions** (the Pareto front).

## Common objective functions

- **Cost:** the sum of fixed, production, transport, inventory.
- **Response time:** the sum of (flow × delivery time), or the maximum time.
- **Reliability:** the rate of meeting demand (fill rate), or the probability of meeting demand.
- **Environmental:** carbon emissions of transport and production, waste.

## Solution methods

- **Weighted sum:** $\min \sum w_k f_k$ (simple, but it misses solutions on non-convex parts of the front).
- **ε-constraint:** minimise one objective and control the rest with constraints $f_k \le \varepsilon_k$; the Pareto front is built by varying $\varepsilon$.
- **Goal programming:** set a goal for each objective and minimise the deviation.
- **Metaheuristics** such as NSGA-II for large problems.
- After reaching the Pareto front, for the **final choice** [[01-introduction-what-is-mcdm|MADM methods]] (such as TOPSIS) are used; that is, MODM and MADM are complementary.

## Sustainable supply chains

Today's world thinks in terms of the "triple bottom line" (economic, social, environmental; Elkington, 1997). A sustainable supply chain measures, besides cost, **environmental and social impact**: reducing transport carbon, recyclable packaging, suppliers' working conditions. Large retailers have announced such policies; assessing them precisely is hard, so models usually bring in quantitative **indicators** (carbon emissions, employment).

## Resilient supply chains

**Resilience** is the ability to withstand and recover after a disruption. Sources of risk: **supply** (supplier bankruptcy), **demand** (volatility), **operations** (breakdown), and **environment** (sanctions, disasters). Strategies:

- **Redundancy** (a second supplier, safety stock), which costs money.
- **Flexibility** (a plant that makes several products).
- **Agility** (quick change).
- The balance between being **lean** (removing waste) and **resilient**: a lean chain is efficient but fragile; the middle way is to combine **lean, agile and flexible** at the same time.

To model it: **stochastic programming** (disruption scenarios with probabilities) or **robust optimisation** (the worst case within an uncertainty set).

## My note

I think the conclusion of this part is simple: when the objective is only cost, the most optimal network is usually the **most fragile**. Resilience cannot be "added later"; it must be in the objective and constraints from the start, and its cost seen plainly.

Related: [[01-introduction-what-is-mcdm|Introduction: what is multi-attribute decision making?]] and [[03-multi-product-multi-period-model|The multi-product, multi-period model]].

#multi_objective #sustainable_supply_chain #resilience
