import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReservationPage from './pages/ReservationPage.jsx';
import UpdatePage from './pages/UpdatePage.jsx';
import CancelPage from './pages/CancelPage.jsx';
import CheckAvailabilityPage from './pages/CheckAvailabilityPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Viv Reservation System</h1>
        <nav>
          <ul>
            <li><Link to="/">New Reservation</Link></li>
            <li><Link to="/update">Update Reservation</Link></li>
            <li><Link to="/cancel">Cancel Reservation</Link></li>
            <li><Link to="/check">Check Availability</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ReservationPage />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/check" element={<CheckAvailabilityPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
