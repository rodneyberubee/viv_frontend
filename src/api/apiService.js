const BASE_URL = 'https://your-middleware-server.com';  // ⬅ Replace this with your actual middleware server URL

// Create Reservation
export async function createReservation(data) {
  const response = await fetch(`${BASE_URL}/reservation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create reservation');
  }
  return response.json();
}

// Update Reservation
export async function updateReservation(data) {
  const response = await fetch(`${BASE_URL}/update-reservation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update reservation');
  }
  return response.json();
}

// Cancel Reservation
export async function cancelReservation(data) {
  const response = await fetch(`${BASE_URL}/cancel-reservation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to cancel reservation');
  }
  return response.json();
}

// Check Availability
export async function checkAvailability(data) {
  const response = await fetch(`${BASE_URL}/check-availability`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to check availability');
  }
  return response.json();
}