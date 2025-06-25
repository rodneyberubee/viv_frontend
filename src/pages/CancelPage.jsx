import React, { useState } from 'react';
import { cancelReservation } from '../api/apiService';

export default function CancelPage() {
  const [formData, setFormData] = useState({
    restaurant_id: '',
    confirmation_code: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Cancelling...');
    try {
      const result = await cancelReservation(formData);
      setStatus(result.message);
    } catch (err) {
      console.error(err);
      setStatus('Error cancelling reservation.');
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
      <p>{status}</p>
    </div>
  );
}