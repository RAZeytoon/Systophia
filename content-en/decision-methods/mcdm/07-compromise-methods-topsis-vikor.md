---
date: 2026-10-20
title: "Compromise methods: TOPSIS and VIKOR"
description: "Both ask which alternative is closest to an ideal solution; they differ in how distance is measured. With a four-laptop example."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/07-روش‌های-سازشی؛-TOPSIS-و-VIKOR
lang: en
tags:
  - TOPSIS
  - VIKOR
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## The shared idea: close to the ideal

Both methods ask: **which alternative is closer to an "ideal solution"?** The ideal is an imaginary alternative holding the best value on every attribute. They differ in **how distance is measured**.

## TOPSIS (Hwang and Yoon, 1981)

The chosen alternative should have the **least distance from the positive ideal** and the **greatest distance from the negative ideal**. Each alternative is a point in $n$-dimensional space.

Steps:
1. Decision matrix; benefit versus cost attributes are specified.
2. **Norm normalisation:** $r_{ij} = x_{ij}/\sqrt{\sum_i x_{ij}^2}$.
3. **Multiply by weights:** $v_{ij} = w_j r_{ij}$.
4. **Positive ideal $A^+$** (the best value of each column) and **negative $A^-$** (the worst).
5. **Euclidean distance** of each alternative from the two: $D_i^+$ and $D_i^-$.
6. **Relative closeness:** $C_i = D_i^- / (D_i^+ + D_i^-)$; larger is better. Alternatives are ordered by descending $C_i$.

## VIKOR (Opricovic, 1998)

It is built on **agreement** for conflicting criteria and gives a "compromise" answer: the closest possible solution to the ideal. Three indicators:

- $S_i$ = weighted sum of relative distance from the best (group utility)
- $R_i$ = largest weighted relative distance (**individual regret**: the worst attribute)
- $Q_i = v\,\dfrac{S_i - S^*}{S^- - S^*} + (1-v)\,\dfrac{R_i - R^*}{R^- - R^*}$

where $v$ is the weight of the "majority of criteria" strategy (usually 0.5). The alternative with the smaller $Q$ is better, **provided two conditions:** (1) **acceptable advantage:** $Q(A_2) - Q(A_1) \ge 1/(m-1)$ and (2) **stability:** $A_1$ must also be best in $S$ or $R$. If a condition fails, a set of alternatives is offered as the "compromise". Weighting in VIKOR is not part of the method itself; it comes from outside.

## Example: the same four laptops

With weights $(0.40,\ 0.35,\ 0.25)$ (see [[06-scoring-methods-saw-wpm-waspas|Scoring methods: SAW, WPM and WASPAS]]):

| | TOPSIS: $C_i$ | Rank | VIKOR: $Q_i$ | Rank |
|---|---|---|---|---|
| A | **0.622** | 1 | **0.037** | 1 |
| B | 0.493 | 3 | 0.322 | 2 |
| C | 0.515 | 2 | 0.889 | 4 |
| D | 0.463 | 4 | 0.697 | 3 |

Both put "A" first. (In VIKOR, though, the acceptable-advantage condition fails: $Q(B)-Q(A) \approx 0.285 < 1/(m-1) \approx 0.333$; so strictly, "A" and "B" together form the compromise set.) But the rest of the ranking differs (TOPSIS puts "C" second and VIKOR last) because VIKOR is more sensitive to **regret** (the worst attribute) and "C" is weak on performance.

## Which one, and when?

- TOPSIS: simple and widely used; assumes complete compensation.
- VIKOR: when you want to take **agreement**, or avoiding regret on a single attribute, into account.

A TOPSIS caveat: "rank reversal" may occur (adding an alternative shifts the ideals).

Related: [[08-outranking-methods-electre-promethee|Outranking methods: ELECTRE and PROMETHEE]] and [[02-normalizing-criteria|Normalizing criteria]].

#TOPSIS #VIKOR #multi_criteria_decision_making
