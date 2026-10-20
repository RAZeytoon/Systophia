---
date: 2026-10-20
title: "Game theory: introduction and history"
description: "From a lone decision to a decision against others: a short history, the basic concepts, the rationality assumption and the classification of games."
translation: روش‌های-تصمیم-و-بهینه‌سازی/نظریه-بازی‌ها-و-چانه‌زنی/01-نظریه-بازی‌ها؛-مقدمه-و-تاریخچه
lang: en
tags:
  - game-theory
  - decision-making
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Game Theory and Bargaining". I rewrote the explanations in my own words and recomputed the numerical examples.

## From a lone decision to a decision against others

In [[11-probabilistic-decisions-utility-and-value-of-information|probabilistic decisions]], "nature" was our opponent and did not deliberately play against us. **Game theory** becomes necessary when the opponent is a **rational person or organisation** who also wants a result for themselves; so **the outcome of my action depends on another's choice too**, and they know it.

## A short history

- 1921: Émile Borel writes papers on strategic games.
- 1928: **John von Neumann** proves the minimax theorem for two-person zero-sum games.
- 1944: von Neumann and **Morgenstern** publish *Theory of Games and Economic Behavior* and the field takes shape.
- 1950 and 1951: **John Nash** introduces the concept of equilibrium for general games.
- 1994: Nash, Harsanyi and Selten receive the Nobel Prize in economics.

## What is a game?

In this course a "game" is any situation where several people (players), each by choosing a strategy, receive an outcome that also depends on the others' choices. A few definitions:

- **Player:** a rational decision maker; an individual, a company or a country.
- **Move:** a choice made at one point of the game (personal or chance).
- **Strategy:** a complete plan for all possible situations. An important difference: a move is a choice, while a strategy is a **decision rule**.
- **Rules of the game:** who knows what, when, and what they can do.
- **Payoff:** the utility number each player receives at the end.
- **Finite/infinite game:** the number of strategies or stages is limited or not.

## The basic assumption: rationality and common knowledge

Every player is rational (maximises their own utility) and this is also **common knowledge**: everyone knows everyone is rational and knows that everyone knows it. Even a little doubt about this assumption changes the result. (Critique: real people are not always like this; see [[06-ultimatum-stackelberg-and-sequential-games|Ultimatum, Stackelberg and sequential games]].)

## Classification

- **Static or dynamic:** players choose simultaneously or in turns.
- **Complete or incomplete information:** are everyone's payoffs and preferences known to everyone?
- **Zero-sum or non-zero-sum:** is one's gain the other's loss? (Two firms fighting over a fixed market share: zero-sum; a contract negotiation where both profit: non-zero-sum.)
- **Cooperative or non-cooperative:** is there a binding contract?

## Why does it matter to me?

In systems analysis, stakeholders are "players" too: finance and marketing each optimise for themselves. I think game theory is a precise language for seeing **conflict** and for **mechanism design** (what do we do so individual incentives align with the organisation's goal?). See [[conflict/index|Conflict and conflicting systems]].

Related: [[02-static-games-prisoners-dilemma-and-nash-equilibrium|Static games: the prisoner's dilemma and Nash equilibrium]].

#game_theory #decision_making
