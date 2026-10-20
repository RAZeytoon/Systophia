---
date: 2026-10-20
title: "Introduction: what is multi-attribute decision making?"
description: "MADM versus MODM, the decision matrix and types of criteria: the starting point of every multi-criteria method."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/01-مقدمه؛-تصمیم‌گیری-چندشاخصه-چیست؟
lang: en
tags:
  - multi-criteria-decision-making
  - MADM
  - decision-matrix
  - systems-analysis
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## When one criterion is not enough

Choosing a car, a supplier or a job cannot be settled with one number: we want a low price and high quality, and the two usually conflict. **Multi-criteria decision making** (MCDM) is exactly this problem: choosing, ranking or classifying alternatives on the basis of several criteria.

## Two families: MADM and MODM

- **MADM** (Multi-Attribute Decision Making): **the number of alternatives is finite and known**, and we choose among them. Here we have "attributes" and work with a decision matrix.
- **MODM** (Multi-Objective Decision Making): **the decision variables are continuous** and the alternatives are countless; the problem takes the form of optimisation with several objective functions (goal programming, ε-constraint and so on).

This section of Systophia is about **MADM**. (We meet MODM in [[04-multi-objective-design-cost-sustainability-resilience|multi-objective network design: cost, sustainability and resilience]].)

## The decision matrix

With $m$ alternatives and $n$ attributes, all the information gathers in a matrix $X = [x_{ij}]$: the entry $x_{ij}$ is the value of alternative $i$ on attribute $j$. We usually also have a weight vector $w = (w_1, \dots, w_n)$ stating the importance of the attributes.

| | Price | Performance | Battery |
|---|---|---|---|
| Alternative A | 40 | 8 | 7 |
| Alternative B | 55 | 9 | 9 |
| Alternative C | 35 | 6 | 6 |

## Types of attribute

- **Quantitative** (price) or **qualitative** (beauty). A qualitative attribute must be quantified with a scale (a Likert scale, say, or fuzzy numbers).
- **Positive (benefit)** or **negative (cost)**: the more, the better or the worse. Price and waste are negative; performance and quality are positive.

## The general steps, in almost every method

1. Form the decision matrix and define the attributes.
2. [[02-normalizing-criteria|Normalise]] so that units become comparable.
3. [[03-weighting-criteria|Weight]] the attributes.
4. Apply an aggregation method: [[05-non-compensatory-methods|non-compensatory]], [[06-scoring-methods-saw-wpm-waspas|scoring]], [[07-compromise-methods-topsis-vikor|compromise]], [[08-outranking-methods-electre-promethee|outranking]] or [[04-ahp-analytic-hierarchy-process|pairwise comparison]].
5. Sensitivity analysis: if the weights change slightly, does the ranking change?

## Compensatory or non-compensatory?

This is the most important classification of the methods: **can weakness on one attribute be compensated by strength on another?** In a compensatory method, yes (a low price can cover for low quality); in a non-compensatory method, no (someone without a licence does not become a driver, however good their speed).

## My note

To me the most important question in all these methods comes before the mathematics: **who decided the attributes, and why these ones?** The method does not resolve the conflict; it only makes it transparent. (For the limits of these methods, see [[essays/mcdm-does-not-understand-love|MCDM does not understand love]].)

Related: [[02-normalizing-criteria|Normalizing criteria]] and [[03-weighting-criteria|Weighting criteria]].

#multi_criteria_decision_making #MADM
