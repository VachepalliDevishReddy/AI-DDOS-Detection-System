import React, { useState } from 'react';
import axios from 'axios';
import { Activity, ShieldAlert, ShieldCheck, RefreshCw, BarChart2 } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    "ACK Flag Count": 0,
    "Init_Win_bytes_forward": 8192,
    "Inbound": 1,
    "Flow Packets/s": 150.5,
    "Destination Port": 80
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value) || 0
    });
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      if (response.data.results && response.data.results.length > 0) {
        setResult(response.data.results[0]);
      }
    } catch (err) {
      console.error("Full connection error details:", err);
      setError(
        err.response?.data?.error || 
        "Failed to connect to Flask API. Ensure the backend server is running on http://localhost:5000"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '40px auto', padding: '24px', backgroundColor: '#0f172a', color: '#f8fafc', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
      
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #334155', paddingBottom: '16px' }}>
        <Activity size={32} color="#38bdf8" />
        <h1 style={{ margin: 0, fontSize: '24px' }}>AI DDoS Detection Dashboard</h1>
      </header>

      {/* Form Section */}
      <div style={{ marginTop: '24px' }}>
        <h3 style={{ color: '#cbd5e1' }}>Enter Network Traffic Features</h3>
        <form onSubmit={handlePredict} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {Object.keys(formData).map((key) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '14px', color: '#94a3b8' }}>{key}</label>
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                style={{
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #334155',
                  backgroundColor: '#1e293b',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            style={{
              gridColumn: 'span 2',
              padding: '12px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#0284c7',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '12px'
            }}
          >
            {loading ? <RefreshCw size={20} /> : <BarChart2 size={20} />}
            {loading ? 'Analyzing Traffic...' : 'Run Prediction'}
          </button>
        </form>
      </div>

      {/* Error Output */}
      {error && (
        <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#7f1d1d', borderRadius: '6px', color: '#fca5a5' }}>
          {error}
        </div>
      )}

      {/* Prediction Output */}
      {result && (
        <div style={{
          marginTop: '24px',
          padding: '20px',
          borderRadius: '8px',
          border: `2px solid ${result.prediction === 'Attack' ? '#ef4444' : '#22c55e'}`,
          backgroundColor: result.prediction === 'Attack' ? '#450a0a' : '#052e16',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          {result.prediction === 'Attack' ? (
            <ShieldAlert size={48} color="#ef4444" />
          ) : (
            <ShieldCheck size={48} color="#22c55e" />
          )}
          <div>
            <h2 style={{ margin: 0, color: result.prediction === 'Attack' ? '#fca5a5' : '#86efac' }}>
              Traffic Classification: {result.prediction}
            </h2>
            <p style={{ margin: '4px 0 0 0', color: '#cbd5e1' }}>
              Confidence Score: <strong>{result.confidence}%</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}