---
title: "An introduction to modelling requirements with use cases"
description: "What a use case is, its five elements, an example of course registration, the use-case diagram, and the benefits of this tool for a systems analyst."
translation: مبانی-تحلیل-سیستم/02-فصل-دوم/14-مقدمه‌ای-بر-مدل‌سازی-نیازمندی‌ها-با-Use-Case
lang: en
---

> [!question] What are we looking at?
> How do we write requirements in a language that designers, programmers, project managers and stakeholders can all understand?

Requirements analysis becomes valuable when it can be put in a form that designers, developers, project managers and stakeholders understand. One simple but effective way to do that is **use-case modelling.**

# What is a use case?

A use case is a scenario in which a "user" (or another system) interacts with our system to reach a specific goal. More simply, it describes *who does what, and how,* with the system.

It has five main elements:

- **Actor:** whoever interacts with the system, such as a user, a manager or another system
- **System:** the thing we have to analyse and design
- **Use case:** what the actor wants from the system, such as registration, reporting or sending a message
- **Scenario:** the sequence of steps to reach the goal
- **Alternative flows:** special cases or errors that may occur

# An example: online registration

The actor is the student, the system is the university's education system, and the use case is "register for next term's courses." The main scenario goes like this:

1. The student logs in to the system
2. The list of courses is displayed
3. The student selects courses
4. The system checks capacity
5. The selections are saved
6. A confirmation message is shown

And the alternative flow: if a course is full, an error message is shown and the student has to pick another course.

# The use-case diagram

For visual modelling we use a diagram, usually with Draw.io or UML tools: an ellipse for use cases, a stick figure for actors, and a line for the link between actor and use case. The simplest form is:

```
[Student] ———> (Course registration)
```

# Why is it useful?

It is simple and understandable for all stakeholders, helps discover scenarios and special cases, eases communication between analyst and designer, is the basis for designing tests (test cases), and can be extended for more complex systems. I think the beauty of the use case is that, instead of a technical description, it focuses on the **real behaviour of the user with the system** and shows the functional requirements clearly and measurably.

#use-case #modelling #requirements-analysis
