import React from 'react';

const ConfirmationMessage = ({ onClose }) => {
  return (
    <div className="confirmation-message">
      <p>Confirmation mail sent successfully!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ConfirmationMessage;
