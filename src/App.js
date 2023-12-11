import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import CreateAppointment from './CreateAppointment';
import CustomerAccounts from './CustomerAccounts';
import AddUser from './AddUser';
import './App.css';
import UserProfile from './Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const handleLoginSuccess = (loginToken) => {
    setIsLoggedIn(true);
    setToken(loginToken);
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn && (
          <nav>
            <Link to="/create-appointment">Create Appointment</Link>
            <Link to="/customer-accounts">Customer Accounts</Link>
            <Link to="/add-user">Add User</Link>
            <Link to="/user-profile">User Profile</Link>
            {/* Add more links as needed */}
          </nav>
        )}

        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          ) : (
            <>
              <Route path="/" element={<Navigate replace to="/create-appointment" />} />
              <Route path="/create-appointment" element={<CreateAppointment token={token} />} />
              <Route path="/customer-accounts" element={<CustomerAccounts />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/user-profile" element={<UserProfile />} />
              {/* Add other routes as needed */}
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
