import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [bookings, setBookings] = useState([]);

  // Fetch booking data from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel - Bookings</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mobile</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Pincode</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Address</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking._id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.mobile}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.email}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.pincode}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.address}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '8px' }}>No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;

