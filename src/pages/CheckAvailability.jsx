import React, { useState } from 'react';

export default function CheckAvailabilityPage() {
  const [formData, setFormData] = useState({
    restaurant_id: '',
    date: '',
    time: ''
  });

  const [result, setResult] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/check-availability`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Error:', err);
      setResult({ error: 'Request failed' });
    }
  };

  return (
    <div>
      <h2>Check Availability</h2>
      <form onSubmit={handleSubmit}>
        <input name="restaurant_id" placeholder="Restaurant ID" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <button type="submit">Check Availability</button>
      </form>
      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
