import React, { useState } from 'react'; // Import React and useState hook
import './PasswordGenerator.css'; // Import CSS for PasswordGenerator component

// Function to generate a random password
const generatePassword = (length) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
};

// Function to create and download a CSV file
const createCSV = (passwords) => {
  const csvRows = [
    ['Password'],
    ...passwords.map(password => [password])
  ];

  const csvContent = csvRows.map(row => row.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', 'passwords.csv');
  a.click();
};

// PasswordGenerator component
const PasswordGenerator = () => {
  // State for password length
  const [length, setLength] = useState(12);
  // State for generated passwords
  const [passwords, setPasswords] = useState([]);

  // Handle click event to generate a new password
  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length);
    const updatedPasswords = [...passwords, newPassword];
    setPasswords(updatedPasswords);
    createCSV(updatedPasswords);
  };

  return (
    <div className="generator-container">
      <label>
        {/* Input for password length */}
        Password Length:
        <input 
          type="number" 
          value={length} 
          onChange={(e) => setLength(e.target.value)} 
          min="1"
        />
      </label>
      {/* Button to generate password */}
      <button onClick={handleGeneratePassword}>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator; // Export PasswordGenerator component
