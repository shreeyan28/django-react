import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomerAccounts.css';

const CustomerAccounts = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get('http://localhost:8989/api/users/')
      .then(response => {
        console.log("API Response:", response.data); 
        setUsers(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Customer Accounts</h1>
      {users.map(user => (
        <div key={user.id} className="user-account">
          <p>Name: {user.name}</p>
          <p>Account Type: {user.account_type}</p> 
          <p>Account Balance: ${user.accountBalance}</p>
          
        </div>
      ))}
    </div>
  );
};

export default CustomerAccounts;
