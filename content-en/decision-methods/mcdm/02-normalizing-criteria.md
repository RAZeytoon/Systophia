---
date: 2026-10-20
title: "Normalizing criteria"
description: "Linear, vector, ratio, min-max and z-score normalisation for the decision matrix, with a worked example and a warning."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/02-بی‌مقیاس‌سازی-شاخص‌ها
lang: en
tags:
  - normalization
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## Why normalise?

Price is in millions, battery in hours and beauty a score from 1 to 5. These cannot be added or multiplied directly. **Normalisation** turns each column into a unitless number, usually between 0 and 1. Non-compensatory methods usually do not need it, since each attribute is measured separately.

## Example: one attribute, four alternatives

Values: $x = (50, 70, 40, 90)$.

| Method | Formula | Result |
|---|---|---|
| **Linear** (positive attribute) | $x_{ij}/\max x_j$ | 0.56, 0.78, 0.44, 1.00 |
| **Linear** (negative attribute) | $\min x_j / x_{ij}$ | 0.80, 0.57, 1.00, 0.44 |
| **Euclidean norm** | $x_{ij}/\sqrt{\sum x_{ij}^2}$ | 0.38, 0.54, 0.31, 0.69 (norm ≈ 130.8) |
| **Ratio (sum)** | $x_{ij}/\sum x_{ij}$ | 0.20, 0.28, 0.16, 0.36 |
| **Min-max** (positive) | $(x-\min)/(\max-\min)$ | 0.20, 0.60, 0.00, 1.00 |
| **Min-max** (negative) | $(\max-x)/(\max-\min)$ | 0.80, 0.40, 1.00, 0.00 |
| **Normal distribution** | $(x-\mu)/\sigma$ | −0.65, 0.39, −1.17, 1.43 |

## Character of each method

- **Linear:** the best value is always 1 but the worst is not zero. For a negative attribute there are two ways: the inverse (above) or $1 - x/\max$, used when all attributes are negative.
- **Norm:** all values stay between 0 and 1 and the direction of the attribute (positive or negative) does not change; it is the basis of [[07-compromise-methods-topsis-vikor|TOPSIS]].
- **Ratio:** the column sum is always 1; for a negative attribute, take the ratio of the inverses.
- **Min-max:** best is 1 and worst is 0; it uses the full range but is very sensitive to outliers.
- **Normal distribution:** with many alternatives we can assume a normal distribution; values lie around zero, usually between −3.5 and +3.5.
- **Centre-seeking:** when the "most desirable" value is neither the maximum nor the minimum but a midpoint (for example the right level of risk-taking for a job). Each alternative is measured by its distance from that desirable point.

## A warning

The choice of normalisation method **can change the final ranking.** I think a good analysis runs with at least two methods and, if the rankings differ, investigates why.

Related: [[01-introduction-what-is-mcdm|Introduction: what is multi-attribute decision making?]] and [[03-weighting-criteria|Weighting criteria]].

#normalization #multi_criteria_decision_making
