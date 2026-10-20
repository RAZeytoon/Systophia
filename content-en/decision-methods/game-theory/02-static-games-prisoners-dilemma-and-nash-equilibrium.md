---
date: 2026-10-20
title: "Static games: the prisoner's dilemma and Nash equilibrium"
description: "The prisoner's dilemma, Nash equilibrium, dominant strategies and iterated elimination with a worked 3x3 example, coordination games and mixed equilibria."
translation: روش‌های-تصمیم-و-بهینه‌سازی/نظریه-بازی‌ها-و-چانه‌زنی/02-بازی‌های-ایستا؛-دوراهی-زندانی-و-تعادل-نش
lang: en
tags:
  - game-theory
  - nash-equilibrium
  - prisoners-dilemma
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Game Theory and Bargaining". I rewrote the explanations in my own words and recomputed the numerical examples.

## The prisoner's dilemma

Two suspects are interrogated separately and each can stay **silent** or **confess**. (Payoff = years in prison with a minus sign; the figures are illustrative.)

| | Silent | Confess |
|---|---|---|
| **Silent** | (−1, −1) | (−10, 0) |
| **Confess** | (0, −10) | (−5, −5) |

If the other stays silent, confessing is better (0 instead of −1); and if the other confesses, confessing is better too (−5 instead of −10). **Confessing is a dominant strategy**; so both confess and get (−5, −5), whereas had both stayed silent they would have got (−1, −1). **Individual rationality leads to a bad collective outcome**; this is the paradox. I think it is the key pattern behind many of the "why do we wreck everything" moments in organisations.

## Nash equilibrium

A combination of strategies is a **Nash equilibrium** if **no player can improve their own position by unilaterally changing their strategy.** An equilibrium is not necessarily the best outcome (in the prisoner's dilemma the equilibrium outcome is not efficient), but it is "stable".

**How to find it:** in the matrix, mark the row's best response for each column and the column's best response for each row; a cell with both marks is an equilibrium.

## Dominant strategies and iterated elimination

- **Strictly dominant:** a strategy that is better than all the other options **against every choice of the opponent**. **Weakly dominant:** at least equal against all and better against at least one.
- **Iterated elimination of strictly dominated strategies:** if a strategy is always dominated, a rational player never chooses it; so remove it and check again with the smaller matrix.

**Example** (payoff in each cell: row player, column player):

| | Col 1 | Col 2 | Col 3 |
|---|---|---|---|
| **Row 1** | (1, 1) | (2, 4) | (4, 5) |
| **Row 2** | (5, 5) | (5, 1) | (5, 4) |
| **Row 3** | (8, 8) | (8, 6) | (0, 6) |

1. Row 1 is dominated by Row 2 (5>1, 5>2, 5>4) → removed.
2. Now Column 2 is dominated by Column 1 (in rows 2 and 3: 5>1 and 8>6) → removed.
3. Column 3 is also dominated by Column 1 (5>4 and 8>6) → removed.
4. With Column 1 alone, Row 2 is dominated by Row 3 (5<8) → removed.

What remains is **(Row 3, Column 1) with payoff (8, 8)**, the unique Nash equilibrium. Interesting: there was no dominant strategy at the start, but iterated elimination solved everything.

## When the equilibrium is not pure or is multiple

- **Multiple equilibria** (like a coordination game): the "battle of the sexes" with payoffs (2,1) and (1,2) for the two possible coordinations and 0 for miscoordination has two pure equilibria and one **mixed equilibrium**: player 1 chooses their own preferred option with probability $2/3$. The theory cannot predict which will happen; a **social convention** or a **focal point** is needed.
- **No pure equilibrium:** like "rock-paper-scissors"; the equilibrium exists only in mixed strategies. ([[03-zero-sum-games-maximin-and-mixed-strategies|Zero-sum games: maximin and mixed strategies]])

Related: [[01-game-theory-introduction-and-history|Game theory: introduction and history]].

#nash_equilibrium #prisoners_dilemma
