import React, { useContext, useState } from 'react';
import Card from './Card';
import SearchTool from './SearchTool';
import UsernameContext from './UsernameContext';
import './App.scss';

function App() {
  const [name, setName] = useState('');
  // let usernameContext = useContext(UsernameContext);

  const handleSearch = (username) => {
    setName(username);
  };

  return (
    <UsernameContext.Provider value={name}>
      <>
        <header>GITUSER APP</header>
        <div className="App">
          <SearchTool handleSearch={handleSearch} />
        </div>
        <Card username={name} />
      </>
    </UsernameContext.Provider>
  );
}

export default App;
