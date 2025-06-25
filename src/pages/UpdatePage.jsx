import React, { useState } from 'react';

export default function UpdatePage() {
  const [formData, setFormData] = useState({
    restaurant_id: '',
    confirmation_code: '',
    date: '',
    time: '',
    party_size: '',
    name: '',
    phone: '',
    email: ''
  });

  const [result, setResult] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/update-reservation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          restaurant_id: formData.restaurant_id,
          confirmation_code: formData.confirmation_code,
          date: formData.date,
          time: formData.time,
          party_size: parseInt(formData.party_size),
          customer: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email
          }
        })
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
      <h2>Update Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input name="restaurant_id" placeholder="Restaurant ID" onChange={handleChange} required />
        <input name="confirmation_code" placeholder="Confirmation Code" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <input name="party_size" type="number" placeholder="Party Size" onChange={handleChange} required />
        <input name="name" placeholder="Customer Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
