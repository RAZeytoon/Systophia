---
date: 2026-10-20
title: "AHP: the analytic hierarchy process"
description: "Saaty's AHP: hierarchy, pairwise comparison, eigenvector weights, the consistency ratio with a worked example, group AHP and ANP/DEMATEL/BWM."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/04-AHP؛-فرایند-تحلیل-سلسله‌مراتبی
lang: en
tags:
  - AHP
  - pairwise-comparison
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## AHP in one sentence

**AHP** (Analytic Hierarchy Process) was built by Thomas Saaty in the 1970s. The idea is to turn a complex problem **into a hierarchy** (goal, criteria, sub-criteria, alternatives) and **compare only two things at a time**, because the human mind is more accurate at pairwise comparison than at weighting ten things at once.

## Four principles

1. **Reciprocity:** if the preference of $A$ over $B$ is $a$, the preference of $B$ over $A$ is $1/a$.
2. **Homogeneity:** the compared elements must be of the same order of importance ("beauty" cannot be compared with "the price of a screw").
3. **Hierarchical dependence:** the elements of each level depend on the level above.
4. **Expectations:** any change in the hierarchy's structure must restart the evaluation.

## Steps

1. Build the hierarchy.
2. **Pairwise comparison** of the elements of each level with Saaty's scale: 1 (equal importance), 3 (slightly more important), 5 (more important), 7 (much more important), 9 (extremely more important) and the even numbers between.
3. Build the pairwise comparison matrix $A$.
4. **Compute the weights** from $A$: the eigenvector method (most accurate), or approximations such as the arithmetic mean of normalised columns, the geometric mean, row and column sums; or least squares.
5. **Check consistency** and merge the weights to reach the final weights of the alternatives.

## Consistency and the inconsistency ratio

If $a_{ij}\cdot a_{jk} = a_{ik}$ holds for all triples, the matrix is **perfectly consistent**; then the largest eigenvalue equals $n$. In practice judgements are slightly inconsistent. Two indicators:

$$CI = \frac{\lambda_{max} - n}{n - 1}, \qquad CR = \frac{CI}{RI}$$

where $RI$ is Saaty's random index ($n = 3$: 0.58; 4: 0.90; 5: 1.12; 6: 1.24; 7: 1.32; 8: 1.41; 9: 1.45; 10: 1.51). If **$CR < 0.1$**, the inconsistency is acceptable; otherwise the judgements must be revised.

## Numerical example

Comparing three criteria:

$$A = \begin{pmatrix} 1 & 2 & 8 \\ 1/2 & 1 & 6 \\ 1/8 & 1/6 & 1 \end{pmatrix}$$

Normalising the columns and averaging the rows: $w \approx (0.593,\ 0.341,\ 0.066)$. With $\lambda_{max} \approx 3.018$ we get $CI \approx 0.009$ and $CR \approx 0.016 < 0.1$: the judgements are acceptable. (The eigenvector method gives nearly the same weights.)

## Group AHP

With several experts, we combine the judgements with the **geometric mean** ($a_{ij}^G = (\prod_k a_{ij}^{(k)})^{1/K}$), because the geometric mean preserves reciprocity and the arithmetic mean does not. (This is the AIJ method; the alternative is AIP, which takes each expert's weights separately and then combines them.)

## Beyond AHP

- **ANP** (Analytic Network Process): when the criteria depend on each other and feed back, it uses a **supermatrix** instead of a hierarchy. It is more complex and therefore used less.
- **DEMATEL:** measures cause-and-effect relations among elements with a direct-influence matrix (row sum $R$ and column sum $J$; $R+J$ is importance and $R-J$ the causal/effect type).
- **BWM:** a cheaper version of pairwise comparison. ([[03-weighting-criteria|Weighting criteria]])

## Critique

The well-known critique of AHP is "rank reversal" (adding a new alternative sometimes changes the ranking of the old ones) and that the 1-to-9 scale is subjective. I think AHP is excellent for group decisions and for making a discussion transparent, but its result should not be felt as "precise".

Related: [[03-weighting-criteria|Weighting criteria]] and [[06-scoring-methods-saw-wpm-waspas|Scoring methods: SAW, WPM and WASPAS]].

#AHP #pairwise_comparison #multi_criteria_decision_making
