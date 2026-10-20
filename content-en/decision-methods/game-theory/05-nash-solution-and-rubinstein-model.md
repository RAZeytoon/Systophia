---
date: 2026-10-20
title: "Nash's solution and Rubinstein's model"
description: "Two views of bargaining: Nash's axiomatic solution and Rubinstein's alternating-offers model, with a numerical table of shares."
translation: روش‌های-تصمیم-و-بهینه‌سازی/نظریه-بازی‌ها-و-چانه‌زنی/05-راه‌حل-نش-و-مدل-رابینشتین
lang: en
tags:
  - bargaining
  - nash-bargaining-solution
  - rubinstein
  - game-theory
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Game Theory and Bargaining". I rewrote the explanations in my own words and recomputed the numerical examples.

## Two views of bargaining

There are two traditions: **axiomatisation** (Nash, 1950): "what properties does a fair agreement have?" and the **strategic model** (Rubinstein, 1982): "what happens if players make offers in turn?" The important point is that the results of both are close.

## Nash's bargaining solution

If $d = (d_1, d_2)$ is the **disagreement point** (the utility when negotiation breaks down), Nash's solution is the outcome that maximises **the product of the gains above disagreement**:

$$\max_{(u_1,u_2)} \; (u_1 - d_1)(u_2 - d_2)$$

This is the only solution satisfying four reasonable axioms:

1. **Individual rationality:** nobody accepts less than disagreement.
2. **Efficiency (Pareto):** no surplus is wasted.
3. **Symmetry:** if the two players are exactly alike, equal shares.
4. **Independence of irrelevant alternatives:** removing unacceptable agreements does not change the answer.
(Together with invariance to linear transformation of utility.)

Dividing a cake of size 1 with linear utility, the answer is: **each gets their disagreement point and the rest of the surplus is split equally.** That is, raising the outside option raises the share.

## Rubinstein's model: alternating offers

A cake of size 1 and two players. In period 1 player 1 makes an offer; if player 2 accepts, it is over. If they reject, a period passes and player 2 makes an offer, and so on until agreement. The passing of time **has a cost**: each player $i$ discounts the next period's cake by a factor $\delta_i \in (0,1)$ (impatience).

**Result (unique subgame-perfect equilibrium):** player 1 makes an offer **in the very first period** and it is **accepted**; no delay occurs. Their share:

$$x_1^* = \frac{1 - \delta_2}{1 - \delta_1 \delta_2}, \qquad x_2^* = 1 - x_1^*$$

If $\delta_1 = \delta_2 = \delta$, then $x_1^* = 1/(1+\delta)$; the first proposer gets **more than half**, because next period's cake is smaller. When periods become very short ($\delta \to 1$), the shares approach **50-50** and reach Nash's solution.

The proof is by **backward induction**: suppose time is unlimited and see what minimum each player accepts; so we lay out expectations from the end to the start.

### Numerical example

| $\delta_1$ | $\delta_2$ | Player 1's share | Player 2's share |
|---|---|---|---|
| 0.9 | 0.9 | 0.526 | 0.474 |
| 0.8 | 0.9 | 0.357 | 0.643 |
| 0.9 | 0.8 | 0.714 | 0.286 |

Second row: player 1 is more impatient ($\delta_1 = 0.8$) and although they propose first, they get only 36%. **Patience beats turn order.** This turns exactly the "patience" factor in [[04-bargaining-power-factors-and-cost-of-waiting|Bargaining: power factors and the cost of waiting]] into a number.

## Critique

Rubinstein's model assumes a **world free of lies**: complete information, alternating offers. In practice negotiations have delays (strikes) and that does not fit the model; the explanation is asymmetric information. Still, I think its key result should stay with me: **in bargaining, the one in less of a hurry wins.**

Related: [[07-bayesian-games-and-signaling|Bayesian games and signaling]].

#rubinstein #nash_solution #bargaining
