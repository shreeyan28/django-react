import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Ensure React Router is installed and set up
import './CreateAppointment.css'; // Your CSS file
import HeaderImage from './header.jpeg'; // Your header image

const CreateAppointment = ({ token }) => {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    date: '',
    reason: '',
    location: '',
    phone: '',
    description: ''
  });

  const [locations, setLocations] = useState(['Location 1', 'Location 2', 'Location 3']);

  useEffect(() => {
    setLocations(['Location 1', 'Location 2', 'Location 3']);
  }, []);

  const handleChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/appointments/', appointmentData);
      alert('Appointment created successfully!');
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Failed to create appointment');
    }
  };

  return (
    <div className="appointment-container">
      <nav className="appointment-nav">
        <Link to="/">Home</Link>
        {/* Add more navigation links as needed */}
      </nav>
      <img src={HeaderImage} alt="Header" className="header-image" />
      <h2>Create Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <input type="text" name="name" placeholder="Your Name" value={appointmentData.name} onChange={handleChange} required />
        <input type="datetime-local" name="date" value={appointmentData.date} onChange={handleChange} required />
        <input type="text" name="reason" placeholder="Reason for Appointment" value={appointmentData.reason} onChange={handleChange} required />
        <select name="location" value={appointmentData.location} onChange={handleChange} required>
          <option value="">Select Location</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
        <input type="text" name="phone" placeholder="Phone Number" value={appointmentData.phone} onChange={handleChange} required />
        <textarea name="description" placeholder="Additional Details" value={appointmentData.description} onChange={handleChange} required />
        <button type="submit">Create Appointment</button>
      </form>
    </div>
  );
};

export default CreateAppointment;



