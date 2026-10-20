---
date: 2026-10-20
title: "Reverse logistics and closed-loop supply chains"
description: "Designing the product-return network: collection, test and sort, remanufacturing and recycling; how forward and reverse networks differ and are integrated."
translation: روش‌های-تصمیم-و-بهینه‌سازی/طراحی-شبکه‌ی-زنجیره‌ی-تأمین/05-لجستیک-معکوس-و-زنجیره‌ی-حلقه‌بسته
lang: en
tags:
  - reverse-logistics
  - closed-loop-supply-chain
  - network-design
  - recycling
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Supply Chain Network Design". I rewrote the explanations in my own words and recomputed the numerical example. The course's main sources include Watson et al. (2013), Chopra and Meindl, and Dekker et al. (2004).

## What is it?

**Reverse logistics** returns product flow from the consumer **toward the producer**: returned products, used parts, packaging. When we **combine** this flow with the forward network, we have a **closed-loop supply chain**. The classic reference: Dekker et al. (2004), *Reverse Logistics: Quantitative Models for Closed-Loop Supply Chains*.

## Why has it become important?

- **Law and producer responsibility** (mandatory recycling),
- **Economics:** the residual value of the product (reusable parts),
- **Brand image and sustainability.**

## Main activities

1. **Collection** of product from the consumer or retailer.
2. **Test and sort:** the condition of each product is checked and its route determined.
3. **Recovery:** reuse, repair, **remanufacturing** (rebuilding to the level of a new product), or **material recycling**.
4. **Disposal** (landfill, incineration) for the remainder.
5. **Return to market** (sale as a second-hand or remanufactured product).

## What makes designing the reverse network hard?

It differs from the forward network:

- **High uncertainty on the supply side:** the quantity, quality and timing of returns are unpredictable (in the forward network **demand** is unknown, in the reverse one **supply**).
- **Heterogeneity:** the condition of each returned product differs.
- **A "many-to-one" network** (many collection points to few processing centres) versus "one-to-many" in forward.
- **Degree of centralisation in test and sort:** do we test at each collection point (decentralised) or take everything to one centre (centralised)? Centralised means more transport of low-value product but economies of scale.

## Network patterns

- **Recycling network** (as for metals and paper),
- **Remanufacturing network** (as for electronic equipment and car parts),
- **Reusable packaging** (crates, pallets, glass).

## Modelling

- **MIP** models with decisions: where the collection, test, remanufacturing and disposal centres are; what flow passes through each.
- **Integrated forward and reverse** (closed loop): shared capacity (a plant that both makes new product and remanufactures), synergy benefits and cost reduction.
- With uncertainty: stochastic programming on the quantity and quality of returns.

## My note

The "closed-loop design" view goes back, conceptually, to the idea of a **system**: the output of one stage is the input of another and we no longer have "waste". See [[system/index|System]]. And I think its main effect is on **product design** too: a product designed for **remanufacturing** makes reverse logistics cheap.

Related: [[04-multi-objective-design-cost-sustainability-resilience|Multi-objective network design: cost, sustainability and resilience]] and [[01-supply-chain-network-design-concept-and-motives|Supply chain network design: concept and motives]].

#reverse_logistics #closed_loop_supply_chain
