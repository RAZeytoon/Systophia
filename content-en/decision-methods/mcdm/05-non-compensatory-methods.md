---
date: 2026-10-20
title: "Non-compensatory methods in multi-attribute decision making"
description: "Dominance, maximin, maximax, conjunctive, disjunctive, lexicographic, elimination and permutation methods: when weakness cannot be bought back."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/05-روش‌های-غیرجبرانی-در-تصمیم‌گیری-چندشاخصه
lang: en
tags:
  - non-compensatory-methods
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## What does "not compensated" mean?

In non-compensatory methods, **weakness on one attribute is not compensated by strength on another.** They usually do not need normalisation, since each attribute is measured separately from the rest.

## 1. Dominance

Alternative $A$ **dominates** $B$ if it is worse on no attribute and better on at least one. This method gives no ranking; it is a **first filter**: dominated alternatives are removed and the remainder are "efficient". If several efficient alternatives remain, the decision maker chooses one as the "preferred solution".

## 2. Maximin: for the pessimist

First the attributes are quantified and normalised linearly (so that negative attributes also become positive). Then for each alternative we find its **worst** value and pick the alternative whose worst is better than all the others'. Suited to a cautious, risk-averse decision maker.

## 3. Maximax: for the optimist

For each alternative we find its **best** value and pick the one with the best of the bests. **Hurwicz** combines the two with an optimism coefficient $\alpha$: $\alpha \cdot \max + (1-\alpha) \cdot \min$.

The flaw of these two methods: **they see only part of the matrix's information** (the minimum or maximum of each row).

## 4. Conjunctive (general satisficing)

Each attribute has a threshold and an alternative **must pass it on all attributes**, like a driving licence. Suited to screening and "acceptable/unacceptable" classification.

## 5. Disjunctive (specific satisficing)

The alternative must meet the threshold **on at least one** attribute, like picking a football player who is enough if outstanding in one particular position. And if we have $n$ independent tests and want the probability of passing, $q = (1-P_a)^n$ is the probability of failing all of them.

## 6. Lexicographic

We rank the attributes. Alternatives are compared on the most important attribute; if one wins we are done, and if tied we go to the next attribute. It is like ordering words in a dictionary (hence "lexicographic"). **Semi-lexicographic:** small differences below a threshold are ignored (indifference) so the next attribute gets its turn too.

## 7. Elimination

Threshold plus order: first the most important attribute, and alternatives that miss its threshold are eliminated; then the second attribute, and so on until one alternative remains.

## 8. Permutation

With $m$ alternatives there are $m!$ possible orders. For each order we compute its "concordance" with the attributes (using their weights): entry $(i,j)$ of the pairwise matrix is the sum of the weights of attributes on which alternative $i$ is better than or equal to $j$; the concordance of an order = (sum of entries above the diagonal) − (sum of entries below it). The order with the highest concordance wins. This gives a full ranking but is practical only for few alternatives (10 alternatives mean 3.6 million permutations).

## Where are they useful?

To me their strongest use is the **first screen**: with 50 alternatives, dominance and conjunctive satisficing bring them down to 5, and then I rank with a compensatory method. And where there is a "red line" (safety, law), non-compensatory is the only right way.

Related: [[06-scoring-methods-saw-wpm-waspas|Scoring methods: SAW, WPM and WASPAS]] and [[01-introduction-what-is-mcdm|Introduction: what is multi-attribute decision making?]].

#non_compensatory #multi_criteria_decision_making
