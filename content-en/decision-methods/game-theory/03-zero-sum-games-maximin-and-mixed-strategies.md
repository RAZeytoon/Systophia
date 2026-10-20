---
date: 2026-10-20
title: "Zero-sum games: maximin and mixed strategies"
description: "Saddle points, maximin and minimax, von Neumann's minimax theorem and a 2x2 mixed-strategy example."
translation: روش‌های-تصمیم-و-بهینه‌سازی/نظریه-بازی‌ها-و-چانه‌زنی/03-بازی‌های-مجموع-صفر؛-ماکسی‌مین-و-راهبرد-مختلط
lang: en
tags:
  - game-theory
  - zero-sum-games
  - mixed-strategy
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Game Theory and Bargaining". I rewrote the explanations in my own words and recomputed the numerical examples.

## Zero-sum

In a zero-sum game, player 1's payoff is minus player 2's, so one matrix is enough (the row player's payoff). The course example: two higher-education institutions must each launch a new programme to attract students; the entries are "percentage increase in intake share for institution A". Rows = A's strategies, columns = B's strategies.

## Maximin and minimax

- The row player is cautious: for each strategy they find the row **minimum** (worst case) and choose the **largest** of those minima: **maximin**.
- The column player likewise finds, for each column, the column **maximum** and chooses the **smallest** of them: **minimax**.

If the two numbers are equal we have a **saddle point**: the value of the game. Neither wants to change (a Nash equilibrium). In the course example, the row minima for institution A were $(14,18,13)$ and the maximin was 13, that is the third strategy.

## Mixed strategy

If there is no saddle point, predictability loses the game. The solution: **play randomly** (choose each strategy with some probability). Von Neumann's minimax theorem (1928) guarantees that in every finite two-person zero-sum game the **value of the game in mixed strategies** exists.

**A 2×2 example:**

| | Col 1 | Col 2 |
|---|---|---|
| **Row 1** | 3 | −1 |
| **Row 2** | −2 | 4 |

Pure maximin: $\max(-1, -2) = -1$; pure minimax: $\min(3, 4) = 3$; they differ → no saddle point. The row player chooses row 1 with probability $p$; the two columns must become indifferent for them: $3p - 2(1-p) = -p + 4(1-p)$ → $5p - 2 = 4 - 5p$ → $p = 0.6$ and the value of the game $=1$. That is, in the long run the row player wins 1 unit on average, and the opponent can do nothing by anticipating them.

## Applications

Problems of direct confrontation over a fixed resource: price competition between two firms for market share, military games, security problems. It is less useful in cooperative relations (most organisational situations are "non-zero-sum").

Related: [[02-static-games-prisoners-dilemma-and-nash-equilibrium|Static games: the prisoner's dilemma and Nash equilibrium]].

#zero_sum #mixed_strategy
