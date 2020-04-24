import React, { Component } from 'react';
import SearchTool from './SearchTool';
import UsernameContext from './UsernameContext';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: [],
    };
  }

  handleSearch = (username) => {
    this.setState({ name: username });
  };

  render() {
    return (
      <UsernameContext.Provider value={this.state.name}>
        <div
          className="App"
          style={{
            display: 'flex',
            width: '100%',
            margin: 'auto',
            padding: '20px',
          }}
        >
          <SearchTool handleSearch={this.handleSearch} />
        </div>
      </UsernameContext.Provider>
    );
  }
}

export default App;
