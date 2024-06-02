import React from 'react'; // Import React
import PasswordGenerator from './components/PasswordGenerator'; // Import PasswordGenerator component
import './App.css'; // Import CSS for App component

// Main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header with title and PasswordGenerator component */}
        <h1>🔒 Password Generator 🔓</h1>
        <PasswordGenerator />
      </header>
    </div>
  );
}

export default App; // Export App component
