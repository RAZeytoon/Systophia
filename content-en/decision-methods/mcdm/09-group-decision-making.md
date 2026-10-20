---
date: 2026-10-20
title: "Group decision making"
description: "Combining several experts' judgements: Borda count, Condorcet's paradox, Arrow's impossibility theorem and a practical recommendation."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/09-تصمیم‌گیری-گروهی
lang: en
tags:
  - group-decision-making
  - borda-count
  - arrow-theorem
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## The problem

In most organisational decisions one person does not decide: several experts or stakeholders each see the attributes and alternatives differently. The question of **group decision making** is: how do we turn several people's opinions into one ranking or choice without one person stealing the others' opinion?

## Two approaches in the course

1. **Group agreement:** if the experts agree on the attributes and alternatives, the data are unified first and the decision is made afterwards.
2. **Individual evaluation:** if there is no agreement, each expert evaluates separately and then the results are combined. (The same applies if the attributes are shared but the weights differ.)

## Ordinal combination methods

The judgements are ranks (ordinal) and we want to build a group ranking. Three well-known techniques: **Borda**, **Bernard**, and **Cook and Seiford**. The simplest is Borda.

**Borda count:** with $m$ alternatives, first rank gets $m-1$ points, second $m-2$, … last zero; the sum of points decides. (Jean-Charles de Borda, 1770.) **Cook and Seiford's method** picks the group rank that minimises the **total distance** from the individuals' ranks.

## A warning: Condorcet's paradox

Three experts, four alternatives:

| Expert | Ranking |
|---|---|
| 1 | A > B > C > D |
| 2 | B > C > A > D |
| 3 | C > A > B > D |

- By Borda count: A $3+1+2=6$, B $2+3+1=6$, C $1+2+3=6$, D 0; **a three-way tie**.
- Pairwise comparison: A over B (two votes to one), B over C (two to one), C over A (two to one): **a vicious cycle!** The group majority has an intransitive preference, while each individual is transitive. This is **Condorcet's paradox** (1785).

## Arrow's impossibility theorem

Kenneth Arrow (1951) proved that for more than two alternatives there is no ranked aggregation method that satisfies several reasonable conditions at once: **unrestricted domain** (any order allowed), **unanimity** (if all prefer A to B, the group says the same), **independence of irrelevant alternatives**, and **no dictator**. That is, a "perfectly fair method of combining votes" does not exist. I think the key lesson is that choosing the method is itself a political decision.

## Combining numerical judgements

When the judgements are numbers:
- **Arithmetic** or **geometric mean** (for pairwise-comparison ratios the geometric one is right, because it preserves reciprocity; see [[04-ahp-analytic-hierarchy-process|AHP: the analytic hierarchy process]]).
- **Delphi:** several rounds of anonymous polling until the experts converge.

## My suggestion

For important decisions: 1) agree on the attributes first, 2) take evaluations independently (to avoid the anchoring effect), 3) run the combination with two methods, 4) when the results differ, **discuss**, rather than calling one "right".

Related: [[01-introduction-what-is-mcdm|Introduction: what is multi-attribute decision making?]] and [[10-decisions-under-uncertainty-fuzzy-numbers|Decisions under uncertainty: fuzzy numbers]].

#group_decision_making #arrow_theorem
