import React, { useState } from 'react';
import { updateReservation } from '../api/apiService';

export default function UpdatePage() {
  const [formData, setFormData] = useState({
    restaurant_id: '',
    confirmation_code: '',
    date: '',
    time: '',
    party_size: '',
    customer: {
      name: '',
      phone: '',
      email: ''
    }
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['name', 'phone', 'email'].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        customer: { ...prev.customer, [name]: value }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting update...');
    try {
      const result = await updateReservation(formData);
      setStatus(result.message);
    } catch (err) {
      console.error(err);
      setStatus('Error updating reservation.');
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
        <input name="party_size" placeholder="Party Size" onChange={handleChange} required />
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <button type="submit">Update Reservation</button>
      </form>
      <p>{status}</p>
    </div>
  );
}