---
date: 2026-10-20
title: "Ultimatum, Stackelberg and sequential games"
description: "Backward induction, the ultimatum game and what experiments show, the Stackelberg leader-follower model with a numerical example, and bilevel programming."
translation: روش‌های-تصمیم-و-بهینه‌سازی/نظریه-بازی‌ها-و-چانه‌زنی/06-اولتیماتوم،-استاکلبرگ-و-بازی‌های-ترتیبی
lang: en
tags:
  - game-theory
  - ultimatum-game
  - stackelberg
  - backward-induction
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Game Theory and Bargaining". I rewrote the explanations in my own words and recomputed the numerical examples.

## Sequential games and backward induction

In a dynamic game players choose **in turn**. To solve it, we go **from the end to the start** (backward induction): see what happens at the last node and, on that basis, make the earlier decision. The answer is a subgame-perfect equilibrium: all empty threats are eliminated, because no player at execution time does something that hurts them. (Like watching a film played from the end to the start.)

## The ultimatum game

Player 1 (the proposer) divides a cake and makes an offer; player 2 **can only accept or reject**; if they reject, both get zero. Theory (backward induction): player 2 accepts any positive amount, so 1 takes nearly the whole cake and offers the minimum.

**Experiments (Güth, Schmittberger and Schwarze, 1982, and later) show something else:** proposers usually offer 40 to 50 percent and offers below about 20 to 30 percent are **usually rejected**, even though rejecting costs the rejecter. Interpretation: people want **fairness** and are willing to pay a cost to punish unfairness. **Neuroeconomics** research (for example Sanfey et al., 2003) has shown that when an offer is unfair the **anterior insula** (linked to disgust) is activated.

We see it in life too: "this is my final offer" (an ultimatum) works when the other side believes it and sees it as fair.

## The Stackelberg model (1934)

Heinrich von Stackelberg modelled a two-firm game where one is the **leader** and moves first, and the other the **follower**. The leader is **committed**: the follower sees their move and then gives the best response. By backward induction the leader predicts the follower's response.

**Example:** market demand $P = 100 - Q$ and zero cost.
- In **Cournot** (simultaneous) each firm produces $q = 100/3 \approx 33.3$ and each profit is ≈ 1111.
- In **Stackelberg**: the leader $q_1 = 50$ and the follower $q_2 = 25$; profits 1250 and 625. **Leader's advantage:** committing to produce a lot makes the follower produce less. (The value of "moving first".)

## Bilevel programming

The Stackelberg game is written mathematically as **bilevel programming**: the leader's problem on top, and the follower's optimisation as a **constraint** inside it. It is used in policy-making too (the government writes the law, firms react).

## My note

Two lessons: 1) **commitment** (losing an option) can be power; 2) **fairness** matters in real human behaviour, even when the theory of "pure rationality" does not see it. Anyone who sees negotiation as only mathematics gives overly harsh ultimatums and regrets it.

Related: [[05-nash-solution-and-rubinstein-model|Nash's solution and Rubinstein's model]] and [[08-position-based-and-principled-negotiation|Position-based and principled negotiation]].

#stackelberg #ultimatum
