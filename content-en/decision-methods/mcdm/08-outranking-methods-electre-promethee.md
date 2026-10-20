---
date: 2026-10-20
title: "Outranking methods: ELECTRE and PROMETHEE"
description: "Pairwise outranking instead of a single score: concordance, discordance and veto in ELECTRE, preference functions and net flows in PROMETHEE."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/08-روش‌های-برتری؛-ELECTRE-و-PROMETHEE
lang: en
tags:
  - ELECTRE
  - PROMETHEE
  - outranking
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## How do they differ from the rest?

Instead of building one overall score, outranking methods compare alternatives **two by two** and ask: "does $A$ **outrank** $B$?" Outranking means we have enough reasons to regard $A$ as at least as good as $B$. The result can be a **partial ranking**: sometimes two alternatives are not comparable, which is more honest than a definite number. For this reason they are also known as the "French school".

## ELECTRE I (Roy, 1968)

For each pair $(a, b)$ there are two indices:

- **Concordance index** $C(a,b)$: the sum of the weights of the attributes on which $a$ is at least as good as $b$. (How much do we agree?)
- **Discordance index** $D(a,b)$: the largest relative difference on attributes where $b$ is better than $a$. (How strong is the worst objection?)

$a$ **outranks** $b$ if $C(a,b) \ge \bar c$ and $D(a,b) \le \bar d$ (the thresholds are given by the decision maker, say 0.6 and 0.4). This is a **partial veto**: even with many in favour, one attribute with a sharp difference can reject the outranking.

At the end the outranking graph is drawn and the **kernel** (alternatives not outranked by any other) is the answer set. Later versions: ELECTRE II to IV, III and TRI.

## PROMETHEE (Brans, 1982)

For each attribute $j$ and each pair $(a, b)$, a **preference function** $P_j(a,b)\in[0,1]$ measures the intensity of $a$'s superiority from the difference of values. There are six types of function: **usual**, U-shape (quasi-criterion), V-shape (linear), level, linear with an indifference area, and **Gaussian**; each has thresholds ($q$ for indifference, $p$ for preference).

Steps:
1. Differences of values on each attribute.
2. Compute $P_j(a,b)$ with the preference function.
3. **Overall preference index:** $\pi(a,b) = \sum_j w_j P_j(a,b)$.
4. **Positive flow** $\phi^+(a) = \frac{1}{m-1}\sum_b \pi(a,b)$ (the strength of a), **negative flow** $\phi^-(a) = \frac{1}{m-1}\sum_b \pi(b,a)$ (the weakness of a), **net flow** $\phi(a) = \phi^+ - \phi^-$.
5. PROMETHEE I: a **partial** ranking from comparing $\phi^+$ and $\phi^-$; PROMETHEE II: a **complete** ranking from the net $\phi$.

## Example: the same four laptops

Weights $(0.40,\ 0.35,\ 0.25)$ and both methods:

**ELECTRE I** (concordance threshold 0.6, discordance threshold 0.4): the outrankings that hold are **A over C** and **B over D**. "A" and "B" are not comparable with each other (A is cheaper and B stronger), and the "kernel" contains A and B.

**PROMETHEE II** with the "usual" function:

| | $\phi^+$ | $\phi^-$ | net $\phi$ | Rank |
|---|---|---|---|---|
| A | 0.467 | 0.533 | −0.067 | 3 |
| B | 0.617 | 0.383 | **0.233** | 1 |
| C | 0.400 | 0.600 | −0.200 | 4 |
| D | 0.517 | 0.483 | 0.033 | 2 |

Here "B" comes first, while [[06-scoring-methods-saw-wpm-waspas|SAW]] had made "A" the winner. Why? Because PROMETHEE with the usual function ignores the **magnitude** of a difference and counts only "being better"; "B" is ahead of "A" on two attributes, however slightly. An important reminder: **the choice of method changes the ranking** and none is "more right"; they only hold different assumptions about value.

## Software

Visual PROMETHEE and Decision Lab have ready software for PROMETHEE and ELECTRE; useful since they also give sensitivity analysis and the GAIA plot.

## Critique

The main advantage: **partial ranking and veto** (a severe weakness is taken as uncompensable). The drawback: setting thresholds and choosing a preference function is subjective, and the result is harder to explain to a manager.

Related: [[07-compromise-methods-topsis-vikor|Compromise methods: TOPSIS and VIKOR]] and [[05-non-compensatory-methods|Non-compensatory methods]].

#ELECTRE #PROMETHEE #multi_criteria_decision_making
