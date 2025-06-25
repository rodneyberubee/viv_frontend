import React, { useState } from 'react';
import { checkAvailability } from '../api/apiService';

export default function CheckAvailabilityPage() {
  const [formData, setFormData] = useState({
    restaurant_id: '',
    date: '',
    time: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Checking...');
    try {
      const response = await checkAvailability(formData);
      setResult(response.available ? 'Time slot is available!' : 'Time slot is already booked.');
    } catch (err) {
      console.error(err);
      setResult('Error checking availability.');
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
      <p>{result}</p>
    </div>
  );
}