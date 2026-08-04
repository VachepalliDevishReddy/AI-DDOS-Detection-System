# AI DDoS Detection System

A full-stack AI-powered dashboard designed to detect and classify Distributed Denial of Service (DDoS) network traffic in real time using a Random Forest machine learning model.

## 🚀 Features

- **Real-Time Traffic Analysis:** Predicts whether incoming network parameters indicate `Normal` behavior or a `DDoS Attack`.
- **Interactive Dashboard:** Built with React and Vite for fast performance and clean UI feedback.
- **RESTful API Backend:** Powered by Flask to expose trained machine learning model inference endpoints.
- **Pre-Trained ML Model:** Uses Random Forest (`ddos_rf_model.pkl`) trained on standard network traffic datasets.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Lucide-React
- **Backend:** Python, Flask, Flask-CORS
- **Machine Learning:** Scikit-Learn, Pandas, Joblib
- **Styling:** CSS3

---

## 💻 Getting Started Locally

### Prerequisites
- Python 3.8+
- Node.js & npm

---

### 1. Backend Setup (Flask API)

Navigate to the `backend` directory and install the required dependencies:

```bash
cd backend
python -m venv .venv
# Activate virtual environment:
# Windows: .venv\Scripts\activate
# Mac/Linux: source .venv/bin/activate
pip install -r ../requirements.txt
python app.py
