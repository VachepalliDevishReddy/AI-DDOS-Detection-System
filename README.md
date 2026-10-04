# AI-Powered Multi-Layer Cybersecurity Threat Detection System

An AI-powered cybersecurity prototype designed to detect DDoS/attack-like network traffic, analyze unusual traffic behavior, and provide a foundation for a broader multi-layer cybersecurity threat detection and response framework.

The project is being developed in stages. The **current implementation contains two integrated security modules**, while additional modules are planned as part of the major-project extension.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Problem Statement](#-problem-statement)
- [Project Objectives](#-project-objectives)
- [Overall System Vision](#-overall-system-vision)
- [Current Implementation](#-current-implementation)
- [Module 1 — DDoS Detection](#module-1--ddos-detection)
- [Module 2 — Device/Traffic Fingerprinting](#module-2--devicetraffic-fingerprinting)
- [How the Two Modules Work Together](#-how-the-two-modules-work-together)
- [Current System Architecture](#-current-system-architecture)
- [Current Results](#-current-results)
- [Technology Stack](#-technology-stack)
- [Dataset](#-dataset)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Running the Project](#-running-the-project)
- [Current Limitations](#-current-limitations)
- [Future Development](#-future-development)
- [Future System Architecture](#-future-system-architecture)
- [Current vs Future System](#-current-vs-future-system)
- [Team](#-team)
- [Project Goal](#-project-goal)

---

# 🔐 Project Overview

Modern networks continuously generate large amounts of traffic, making it difficult to identify malicious activity using only traditional security mechanisms.

A cybersecurity system should not only determine whether traffic appears malicious, but should also analyze **how unusual the traffic behavior is**, identify changes in behavior, predict potential threats, explain security decisions, and eventually take automated defensive actions.

This project proposes a **multi-layer AI-powered cybersecurity threat detection system** that progressively combines different security analysis techniques.

The current prototype focuses on two complementary layers:

### Layer 1 — DDoS Detection

Uses a trained **Random Forest Classifier** together with prototype traffic-rate detection logic to classify network-flow traffic as:

- `Benign`
- `Attack`

### Layer 2 — Device/Traffic Fingerprinting

Analyzes selected network-flow characteristics against a benign traffic baseline and determines whether the observed traffic behavior is:

- `Normal`
- `Anomalous`

The two modules therefore provide different but complementary security information.

```text
                    Network Traffic
                          │
                          ▼
                ┌───────────────────┐
                │ Feature Analysis  │
                └─────────┬─────────┘
                          │
              ┌───────────┴───────────┐
              │                       │
              ▼                       ▼
       DDoS Detection        Traffic Fingerprinting
              │                       │
              ▼                       ▼
       Attack / Benign          Normal / Anomalous
              │                       │
              └───────────┬───────────┘
                          ▼
                 Security Dashboard
