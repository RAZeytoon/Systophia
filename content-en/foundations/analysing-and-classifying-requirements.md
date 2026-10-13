---
date: 2026-10-13
title: "Analysing and classifying requirements"
description: "How to give raw requirement data structure and classify it, resolve conflicts, prioritise (MoSCoW) and document it."
translation: مبانی-تحلیل-سیستم/03-فصل-سوم/18-تحلیل-و-دسته‌بندی-نیازمندی‌ها
lang: en
---

> [!question] What are we looking at?
> The needs we have gathered are still raw; how do we turn them into "design-ready knowledge"?

So far we've learned how to gather requirements from stakeholders and users. But this raw data isn't yet ready for system design. It has to be analysed, structured, classified and, most importantly, its conflicts and ambiguities removed. This is where "data" turns into "system-design knowledge".

The aim of this stage is to remove ambiguity and repetition, find conflicts between needs, turn natural-language needs into technical documents, and prioritise wishes for better design decisions.

# Kinds of classification

**Functional requirements** are what the system must do, like "the user can produce a monthly performance report" or "the system validates the user's password at login."

**Non-functional requirements** are the system's quality attributes, like "response time under three seconds" or "data security to the OWASP standard."

There is another classification, by importance:

|Type|Explanation|Example|
|---|---|---|
|Mandatory|Without it the system is incomplete|Secure login|
|Optional|Adds value but isn't essential|Graphical dashboard|
|Forward-looking|Planning for later expansion|Connection to an external ERP|

# Conflicts between requirements

In many projects stakeholders have wishes that conflict. For example, the finance department wants only certain managers to access reports, while marketing wants all data open and downloadable. Here the analyst must identify the conflict, talk to the stakeholders, propose a resolution, and document the solution and get it approved.

# Tools

For analysis we use the Use Case Diagram (user interaction with the system), Activity Diagram or BPMN (workflow), Decision Table (documenting decisions), and Mind Map or Affinity Diagram (grouping needs).

# Prioritisation

Common criteria: business value, implementation cost, time needed and associated risk. A popular tool is the **MoSCoW method**: Must have, Should have, Could have and Won't have this time.

# Final documentation

The output of this stage should be a clear and precise document with a classified list of requirements, a precise description of each need, priorities, supporting scenarios and diagrams, and the stakeholders' written approval.

I think this stage is like panning gold out of river sand: we refine the raw data, resolve conflicts, and make it ready for design.

#requirements-analysis #classification #prioritisation #MoSCoW
