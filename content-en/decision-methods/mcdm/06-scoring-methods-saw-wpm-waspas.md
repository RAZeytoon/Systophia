---
date: 2026-10-20
title: "Scoring methods: SAW, WPM and WASPAS"
description: "Weighted sum, weighted product and their combination WASPAS, with a four-laptop example and why sensitivity analysis is part of the method."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/06-روش‌های-امتیازدهی؛-SAW،-WPM-و-WASPAS
lang: en
tags:
  - SAW
  - WPM
  - WASPAS
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## The idea

After [[02-normalizing-criteria|normalising]] and [[03-weighting-criteria|weighting]], we build an **overall score** for each alternative and pick the highest. These methods are **compensatory**: a high score on one attribute can cover a low score on another.

## SAW (simple additive weighting)

$$S_i = \sum_j w_j\, n_{ij}$$

We normalise the matrix linearly (a negative attribute by its inverse). The score of each alternative = the sum of (weight × normalised value).

## WPM (weighted product)

$$P_i = \prod_j n_{ij}^{\,w_j}$$

A product instead of a sum and a power instead of a multiplication. It is more sensitive to very low values: if an alternative is nearly zero on one attribute, its overall score is also nearly zero, so it behaves a little "more non-compensatory".

## WASPAS

Zavadskas et al. (2012) proposed combining both:

$$Q_i = \lambda\, S_i + (1-\lambda)\, P_i$$

usually with $\lambda = 0.5$ (or optimised from the standard deviations). Its accuracy is higher than either alone.

## Example: four laptops

| | Price (million) | Performance | Battery |
|---|---|---|---|
| A | 40 | 8 | 7 |
| B | 55 | 9 | 9 |
| C | 35 | 6 | 6 |
| D | 60 | 10 | 8 |

Weights $(0.40,\ 0.35,\ 0.25)$; price is negative and the rest positive.

| | SAW | WPM | WASPAS (λ=0.5) |
|---|---|---|---|
| A | **0.824** | **0.823** | **0.823** |
| B | 0.820 | 0.804 | 0.812 |
| C | 0.777 | 0.756 | 0.767 |
| D | 0.806 | 0.783 | 0.795 |

In this example all three put "A" first, but the gap between A and B is only 0.004; so with a small change in the weights the ranking changes. That is why **sensitivity analysis** is part of the method, not decoration.

## When and why?

SAW and WPM are simple and excellent for explaining to a senior manager. Their critique is that they assume the **attributes are independent** and compensation is complete. If not, I move to [[07-compromise-methods-topsis-vikor|TOPSIS]] or [[08-outranking-methods-electre-promethee|outranking]].

Related: [[03-weighting-criteria|Weighting criteria]].

#SAW #WPM #WASPAS
