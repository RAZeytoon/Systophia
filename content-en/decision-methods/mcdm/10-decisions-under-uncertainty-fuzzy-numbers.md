---
date: 2026-10-20
title: "Decisions under uncertainty: fuzzy numbers"
description: "Fuzzy sets, triangular fuzzy numbers, linguistic variables, defuzzification and fuzzy AHP/TOPSIS, with a critique."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/10-تصمیم‌گیری-در-شرایط-عدم-قطعیت؛-اعداد-فازی
lang: en
tags:
  - fuzzy-numbers
  - uncertainty
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## Why fuzzy?

When an expert says "the quality of this alternative is about good" or "the price is roughly 7", there is no numerical precision. Instead of forcing a number, we can **model the vagueness**. Lotfi Zadeh (1965) introduced the **fuzzy set**: each element $x$ has a **degree of membership** $\mu(x) \in [0,1]$, not just "is or is not".

## The fuzzy number

A **fuzzy number** is a fuzzy set on the real numbers that represents "roughly 7" or "about 4": discrete (a few points with membership degrees) or continuous (like a bell curve). In practice three shapes are common: **triangular** $(l, m, u)$, trapezoidal and Gaussian.

### The triangular fuzzy number (TFN)

$\tilde a = (l, m, u)$: $l$ is the lowest plausible value, $m$ the most plausible and $u$ the highest; the membership at $m$ is 1. Operations:

- Addition: $(l_1,m_1,u_1)+(l_2,m_2,u_2) = (l_1+l_2,\ m_1+m_2,\ u_1+u_2)$
- Multiplication by a positive number $k$: $(kl, km, ku)$
- Inverse: $(1/u,\ 1/m,\ 1/l)$

## Linguistic variables

We turn qualitative judgements into TFNs. A common five-point scale:

| Term | TFN |
|---|---|
| Very low | (0, 0, 0.25) |
| Low | (0, 0.25, 0.5) |
| Medium | (0.25, 0.5, 0.75) |
| High | (0.5, 0.75, 1) |
| Very high | (0.75, 1, 1) |

(Other scales exist; what matters is that it covers the 0-to-1 range fully and stays fixed across papers.)

## Defuzzification

At the end we want an ordinary number. The simplest method for a TFN is the **mean**: $(l+m+u)/3$. (There are also the centroid method and the $\alpha$-cut.)

## Use in decision making

Replace crisp numbers with TFNs in other methods:
- **Fuzzy AHP:** pairwise comparisons with TFNs.
- **Fuzzy TOPSIS (Chen, 2000):** the decision matrix and weights are TFNs; the positive and negative ideals are built from TFNs and distances are computed with the vertex distance (for two TFNs: $d = \sqrt{\tfrac13[(l_1-l_2)^2+(m_1-m_2)^2+(u_1-u_2)^2]}$).

## Critique

Fuzzification does not always increase accuracy; it **"hides" the vagueness** and the choice of membership function is subjective. I think it is worth it when the information is really vague (human judgement, say); when you have precise data, fuzzifying it is meaningless. Alternatives: **probability** (when we have a distribution; [[11-probabilistic-decisions-utility-and-value-of-information|Probabilistic decisions: utility and the value of information]]) or **interval/robust** (when we know only a range).

Related: [[07-compromise-methods-topsis-vikor|Compromise methods: TOPSIS and VIKOR]] and [[04-ahp-analytic-hierarchy-process|AHP: the analytic hierarchy process]].

#fuzzy #uncertainty
