import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css';

// Import your bank logo and icons here
import bankLogo from './logo1.jpeg';
import userIcon from './logo2.jpeg';
import moneyIcon from './logo3.jpeg';
import accountTypeIcon from './logo3.jpeg'; // Add an icon for account type if needed

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    accountBalance: '',
    accountType: '' // New field for account type
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8989/api/users/', newUser)
      .then(response => {
        console.log(response.data);
        alert('User added successfully!');
        setNewUser({ name: '', accountBalance: '', accountType: '' });
        setFormSubmitted(true);
      })
      .catch(error => console.log(error));
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className={`form-container ${formSubmitted ? 'submitted' : ''}`}>
      <img src={bankLogo} alt="Bank Logo" className="bank-logo" />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <img src={userIcon} alt="User Icon" className="input-icon" />
          <input name="name" value={newUser.name} onChange={handleChange} placeholder="Name" />
        </div>
        <div className="input-container">
          <img src={moneyIcon} alt="Money Icon" className="input-icon" />
          <input name="accountBalance" type="number" value={newUser.accountBalance} onChange={handleChange} placeholder="Account Balance" />
        </div>
        <div className="input-container">
          <img src={accountTypeIcon} alt="Account Type Icon" className="input-icon" />
          <select name="accountType" value={newUser.accountType} onChange={handleChange}>
            <option value="">Select Account Type</option>
            <option value="savings">Savings Account</option>
            <option value="checking">Checking Account</option>
          </select>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
