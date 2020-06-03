import React, { useState } from 'react';
import SearchTool from './SearchTool';
import UsernameContext from './UsernameContext';
import './App.css';

function App() {
  const [name, setName] = useState('');

  const handleSearch = (username) => {
    setName(username);
  };

  return (
    <UsernameContext.Provider value={name}>
      <div
        className="App"
        style={{
          display: 'flex',
          width: '100%',
          margin: 'auto',
          padding: '20px',
        }}
      >
        <SearchTool handleSearch={handleSearch} />
      </div>
    </UsernameContext.Provider>
  );
}

export default App;
