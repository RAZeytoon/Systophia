---
date: 2026-10-13
title: "Expert systems and their role in analysis"
description: "What an expert system is, from the idea of storing a specialist's knowledge to DENDRAL and Mycin, its components, how it works, uses, and its difference from modern AI."
translation: مبانی-تحلیل-سیستم/03-فصل-سوم/20-آشنایی-با-سیستم‌های-خبره-و-نقش-آن‌ها-در-تحلیل
lang: en
---

> [!question] What are we looking at?
> Can a specialist's knowledge be put into software? And what does that have to do with a systems analyst?

Imagine an experienced chef at a famous restaurant is about to retire. Before saying goodbye, he writes down and organises his years of experience so the next chef, even without him, can make the famous soup. I think this picture is the simplest explanation of the idea of an "expert system": **storing an expert's knowledge for future use.**

# From the idea to Mycin

The first system usually called an "expert system" is **DENDRAL**: a project at Stanford University (from about 1964–65) with Edward Feigenbaum, Joshua Lederberg and the chemist Carl Djerassi, which guessed the structure of organic molecules from their mass spectra, work that until then an expert chemist had done.

The best-known later example is **Mycin**, built in the early 1970s at Stanford to help doctors treat bacterial infections. By asking a few questions it analysed the patient's condition and, from its "knowledge base", a few hundred if-then rules, it proposed treatment. In a blinded evaluation in 1979 (Yu and colleagues, *JAMA*), eight specialists rated treatment recommendations for ten meningitis cases without knowing which came from the machine; Mycin's recommendations were rated about 65% "acceptable", against 42.5% to 62.5% for five Stanford faculty specialists. More precisely, in that small trial it was on par with the specialists, not better than all doctors; and it was never used in clinical practice, because of legal and ethical questions and the integration technology of the time, not weakness of performance.

# What is an expert system?

Intelligent software that tries to think, decide and even advise like a **human specialist.** It has five main parts:

1. **Knowledge base:** specialised knowledge, rules, experience and laws
2. **Inference engine:** the logic and algorithm that reaches conclusions from the knowledge
3. **User interface:** the means of talking to the user, asking questions and showing results
4. **Explanation module:** tells the user the reason for each decision
5. **Fact base:** information specific to each scenario, such as the data of a particular patient or customer

# How does it work?

Suppose you tell the system, "The patient has a fever and a sore throat." The system proceeds with rules like these:

```
if fever + sore throat → probable viral infection
if viral infection → prescribe rest and fluids
```

and concludes: "The patient probably has a viral infection. Suggested treatment: rest and fluids. If symptoms continue, see a doctor."

# Where is it used today?

In medicine (diagnosis and treatment-suggestion systems based on the patient's record), engineering and manufacturing (diagnosing machine faults, advising preventive maintenance, and the classic example XCON, which DEC used in the 1980s to configure orders for VAX computers), management and business (decision-support systems) and customer service (rule-based decision trees and Q&A that guide step by step like an expert).

# How is it different from modern AI?

Classical expert systems rely on **explicit, pre-set rules**, while most of today's AI algorithms, such as machine learning and neural networks, are built on **statistical data and automatic learning.** So IBM Watson, for instance, shouldn't be counted a classical expert system; it is built on machine learning and natural-language processing, not hand-written rules. Even so, wherever **transparency, explainability and documentation of decisions** are needed, expert systems still have great value.

In systems analysis they can also help the analyst decide faster and more precisely in complex situations.

#expert-systems #artificial-intelligence #Mycin #systems-analysis
