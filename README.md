# AI-Powered Multi-Layer Cybersecurity Threat Detection System

A full-stack AI-powered cybersecurity prototype designed to detect DDoS/attack-like network traffic and analyze unusual traffic behavior.

The current implementation contains two integrated security modules:

1. **DDoS Detection**
2. **Device/Traffic Fingerprinting**

The first module classifies traffic as **Benign or Attack**, while the second compares traffic behavior with a benign baseline and generates an **anomaly score**.

---

## 📌 Project Overview

Traditional rule-based and signature-based security systems may struggle with changing traffic behavior. This project combines machine-learning-based DDoS detection with traffic-behavior analysis to provide complementary security information.

The current prototype focuses on:

- DDoS/attack-like traffic classification
- Network-flow feature analysis
- Traffic-behavior fingerprinting
- Benign baseline comparison
- Anomaly scoring
- Interactive security dashboard
- Flask REST APIs

The current implementation establishes the foundation for a broader multi-layer cybersecurity framework.

---

# 🚀 Current Implemented Modules

## Module 1 — DDoS Detection

The DDoS Detection module analyzes network-flow features and classifies traffic into:

- **Benign**
- **Attack**

The module uses a trained **Random Forest Classifier** together with the current prototype traffic-rate detection logic.

### Workflow

```text
Traffic Input
      ↓
Feature Preparation
      ↓
Random Forest
      ↓
Attack / Benign
      ↓
Flask API
      ↓
React Dashboard
