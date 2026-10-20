---
date: 2026-10-20
title: "Probabilistic decisions: utility and the value of information"
description: "Payoff tables, expected monetary value, EVPI, Bayes' rule, expected utility theory and decision trees, with a numerical example."
translation: روش‌های-تصمیم-و-بهینه‌سازی/تصمیم‌گیری-چندشاخصه/11-تصمیم‌گیری-احتمالی؛-مطلوبیت-و-ارزش-اطلاعات
lang: en
tags:
  - decision-under-risk
  - EVPI
  - utility-theory
  - multi-criteria-decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Multi-Criteria Decision Making". I rewrote the explanations in my own words and recomputed the numerical examples. Main source of the course: Asgharpour, *Multi-Criteria Decision Making* (University of Tehran).

## Where does this fit?

So far we have talked about several attributes and finite alternatives. Now the reverse: **one criterion** (profit, say) but **the outcome is random**. We must choose among several "actions" while not knowing the "state of nature".

## The payoff table

Actions (rows), states of nature (columns), and the payoff of each combination:

| | State 1 ($p=0.4$) | State 2 ($p=0.6$) |
|---|---|---|
| Action 1 | 100 | −20 |
| Action 2 | 40 | 30 |

## Decision criteria

- Without probabilities: maximin, maximax, Hurwicz, **minimax regret** (Savage), Laplace (equal probabilities). (See [[05-non-compensatory-methods|Non-compensatory methods]].)
- With probabilities: **expected monetary value (EMV)**: $EMV(a) = \sum_\theta p(\theta)\,u(a,\theta)$. Here $EMV_1 = 28$ and $EMV_2 = 34$; action 2 wins.

## Expected value of perfect information (EVPI)

If before deciding we knew the state of nature **exactly**, in each state we would choose the best action: $E[\max] = 0.4\times 100 + 0.6\times 30 = 58$. Its difference from the best EMV:

$$EVPI = 58 - 34 = 24$$

That is, **no source of information is worth more than 24 units.** This is a ceiling; for imperfect information (sampling) the value is lower, and we update probabilities with **Bayes' rule**: $P(\theta|e) = \dfrac{P(e|\theta)P(\theta)}{P(e)}$. (The class example: if we pay to look at a sample item, it is worth it only when the value of the sample's information exceeds its cost.)

## Utility theory

Expected monetary value does not see risk aversion: someone who wins 100 million or zero is not the same as someone who surely gets 50. **Von Neumann and Morgenstern** (1944) showed that if preferences satisfy a few axioms (**completeness, transitivity, continuity, independence**), there is a utility function $u$ such that the decision maker in effect maximises **expected utility**.

Example: a 50-50 gamble between 0 and 100 with $u(x) = \sqrt{x}$: expected utility $0.5\sqrt{100} = 5$; the **certainty equivalent** (the sure amount with the same utility) is $5^2 = 25$, less than the EMV (50); the person is **risk-averse**. A convex $u$ means risk-seeking and a linear one risk-neutral. We usually define utility between 0 and 1.

## The decision tree

When decisions come in sequence (first sample, then decide), a **decision tree** lays out the decision (square) and chance (circle) nodes in order and is solved **from leaves to root** (backward induction).

## My note

When I have no data, I make up the "probability" myself, and that always looks suspicious to me. So I compute EVPI first: if the ceiling on the value of information is small, I do not spend time on analysis and just decide; if it is large, then **gathering information** is a better decision than polishing the model.

Related: [[10-decisions-under-uncertainty-fuzzy-numbers|Decisions under uncertainty: fuzzy numbers]] and [[01-introduction-what-is-mcdm|Introduction: what is multi-attribute decision making?]].

#probabilistic_decisions #EVPI #utility
