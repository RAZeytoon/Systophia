---
date: 2026-10-20
title: "Supply chain network design: concept and motives"
description: "Network design means deciding the number, location and capacity of suppliers, plants and warehouses; when it is needed and what affects it."
translation: روش‌های-تصمیم-و-بهینه‌سازی/طراحی-شبکه‌ی-زنجیره‌ی-تأمین/01-طراحی-شبکه‌ی-زنجیره‌ی-تأمین؛-مفهوم-و-انگیزه‌ها
lang: en
tags:
  - supply-chain
  - network-design
  - facility-location
  - SCND
---

> [!note] From my doctoral course
> This note comes from the doctoral course "Supply Chain Network Design". I rewrote the explanations in my own words and recomputed the numerical example. The course's main sources include Watson et al. (2013), Chopra and Meindl, and Dekker et al. (2004).

## Supply chain and network

A **supply chain** is the set of suppliers, plants, warehouses, distribution centres and customers, and the flow of product (and money and information) from the source of production to the final customer. **Network design** (Supply Chain Network Design) is the answer to questions like:

- How many plants and warehouses do we want?
- **Where** should we build them and **with what capacity**?
- From which centre should each customer be supplied?
- Where should each product be produced?

The number and location of these facilities are among the most important success factors of a chain. Some experts say a large part of logistics cost can no longer be changed after the network is designed, since moving a plant takes years. (This figure is not exact; the qualitative point matters.)

## When is design (or redesign) needed?

- **Merger:** after two companies merge, parallel networks become redundant.
- **Expansion:** entering a new market, growing demand.
- **Disruption:** a crisis, sanctions, a pandemic or a change of regulation has broken the network.
- **Strategic change:** for example from "low cost" to "fast response".

## Influencing factors

- **Macroeconomic factors:** taxes, customs tariffs, exchange rate, demand risk.
- **Competitive factors:** distance from competitors, competition for customers and labour (spatial competition games such as Hotelling's model; see [[02-static-games-prisoners-dilemma-and-nash-equilibrium|Static games: the prisoner's dilemma and Nash equilibrium]]).
- **Costs of disruption and the willingness to change.**
- **Logistical and operational factors:** transport cost, inventory, response time.

The main relation: **as the number of warehouses rises, transport cost falls** (we get closer to the customer) **but fixed cost and inventory rise** (each warehouse needs its own safety stock). Total cost has an optimal point.

## Types of facility

- **Distribution centre (DC):** sells to the customer or retailer from the warehouse.
- **Warehouse at the plant** and **central warehouse (hub):** the place of intermediate storage.
- Product mix: if a set of products must reach the customer, multi-product distribution centres are needed.

## What models do we have?

Network design is solved with **mathematical optimisation**: basic location models, **multi-product and multi-period** models ([[03-multi-product-multi-period-model|multi-product, multi-period model]]), **multi-objective** ([[04-multi-objective-design-cost-sustainability-resilience|multi-objective network design]]), **reverse logistics** ([[05-reverse-logistics-and-closed-loop-supply-chains|reverse logistics and closed-loop chains]]), and models under uncertainty, risk and competition.

## My note

I think network design is a good example of "a design whose mathematics is smaller than its decision": the model assumes many things (constant demand, linear costs) and the decision is for ten years. So the model's result must be tested with **scenarios and sensitivity analysis**.

Related: [[02-multi-stage-framework-from-region-to-exact-site|The multi-stage framework: from region to exact site]].

#supply_chain #network_design
