---
date: 2026-10-20
title: "Weighting criteria"
description: "Subjective weights (voting, Likert, ranking, AHP, BWM) and objective weights (Shannon entropy, standard deviation), with an entropy example."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/03-وزن‌دهی-به-شاخص‌ها
lang: en
tags:
  - weighting
  - shannon-entropy
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## Where do weights come from?

The weight of an attribute says "how important is this attribute to the decision". It has two sources:

- **Subjective:** it comes from experts or the decision maker.
- **Objective:** it is extracted from the data of the decision matrix itself.

## Subjective methods

1. **Relative frequency:** we ask experts to "vote" for some attributes; the weight of an attribute is its votes divided by all votes. (30 experts, 3 votes each from 6 attributes: 90 votes; an attribute with 19 votes gets a weight of 0.21.)
2. **Arithmetic mean on a Likert scale:** each expert rates the importance of an attribute from 1 to 5 (very low to very high); we average and normalise so the weights sum to 1.
3. **Ranking:** the expert orders the attributes from most to least important and the rank is converted into a weight (for example with the reverse rank-sum formula).
4. **Pairwise comparison (AHP):** we compare every two attributes; details in [[04-ahp-analytic-hierarchy-process|AHP: the analytic hierarchy process]].
5. **Best-Worst Method (BWM):** the decision maker names the best and the worst attribute and compares only those with the rest. For $n$ attributes it needs $2n-3$ comparisons (instead of $n(n-1)/2$ in AHP) and has better consistency. (Rezaei, 2015)
6. **Others:** SWARA (Kersuliene, 2010), CRITIC (Diakoulaki, 1995) and LINMAP.

## Objective methods

**Shannon entropy:** the idea is that an attribute that **separates the alternatives more** (more dispersion) carries more information and gets more weight. An attribute on which all alternatives are nearly alike adds nothing to the decision.

Steps:
1. $p_{ij} = x_{ij} / \sum_i x_{ij}$
2. entropy of each attribute: $E_j = -k \sum_i p_{ij}\ln p_{ij}$, with $k = 1/\ln m$
3. degree of divergence: $d_j = 1 - E_j$
4. weight: $w_j = d_j / \sum d_j$

**Example:** four jobs and five attributes (income, social standing, hardship, distance, job security):

| | Income | Standing | Hardship | Distance | Security |
|---|---|---|---|---|---|
| Job 1 | 15 | 7 | 4 | 10 | 7 |
| Job 2 | 12 | 5 | 5 | 3 | 9 |
| Job 3 | 20 | 9 | 3 | 30 | 5 |
| Job 4 | 30 | 3 | 1 | 1 | 3 |

The entropies come to about $(0.956, 0.948, 0.913, 0.625, 0.948)$ and the weights to about **(0.072, 0.086, 0.143, 0.615, 0.086)**. "Distance" gets a very high weight because it has the most dispersion, not because it matters more to me.

**Standard deviation:** simpler: normalise the matrix with the norm method, take the standard deviation of each column and make the weight proportional to it.

## A warning

An objective weight **equates importance with dispersion.** In the example above "distance" won, but job security might be the most important to me. I think the best approach is a **combination**: the subjective weight (what matters to me) and the objective weight (what separates the alternatives), and then looking at the gap between them.

Related: [[04-ahp-analytic-hierarchy-process|AHP: the analytic hierarchy process]] and [[02-normalizing-criteria|Normalizing criteria]].

#weighting #shannon_entropy #multi_criteria_decision_making
