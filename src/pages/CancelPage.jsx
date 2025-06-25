import React, { useState } from 'react';

export default function CancelPage() {
  const [formData, setFormData] = useState({
    restaurant_id: '',
    confirmation_code: ''
  });

  const [result, setResult] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/cancel-reservation`, {
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
      <h2>Cancel Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input name="restaurant_id" placeholder="Restaurant ID" onChange={handleChange} required />
        <input name="confirmation_code" placeholder="Confirmation Code" onChange={handleChange} required />
        <button type="submit">Cancel Reservation</button>
      </form>
      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
