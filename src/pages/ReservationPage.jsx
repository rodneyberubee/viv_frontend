import React, { useState } from 'react';
import { createReservation } from '../api/apiService';  // <--- This is where you paste the import

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    restaurant_id: '',
    date: '',
    time: '',
    party_size: '',
    name: '',
    phone: '',
    email: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        restaurant_id: formData.restaurant_id,
        date: formData.date,
        time: formData.time,
        party_size: parseInt(formData.party_size),
        customer: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        }
      };

      const response = await createReservation(payload);  // <--- This is where you call it
      setResult(response);
    } catch (err) {
      console.error('Error:', err);
      setResult({ error: 'Request failed' });
    }
  };

  return (
    <div>
      <h2>Create Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input name="restaurant_id" placeholder="Restaurant ID" onChange={handleChange} required />
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