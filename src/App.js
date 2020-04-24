import React, { Component } from 'react';
import UsernameContext from './UsernameContext';
import SearchTool from './SearchTool';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   // super(props);
  //   // this.state = {
  //   //   // name: '',
  //   //   // data: []
  //   // };
  // }

  // handleSearch = (username) => {
  //   console.log('entering', username);
  //   this.setState({ name: username });
  //   console.log('state', this.state.name);
  // };

  render() {
    return (
      <UsernameContext.Provider value={''}>
        <div
          className="App"
          style={{
            width: '100%',
            height: 'auto',
            margin: 'auto',
            background: 'skyBlue',
            padding: '20px',
          }}
        >
          <SearchTool handleSearch={this.handleSearch} />
          {/* {this.state.name.length ? <GridView username={this.state.name} /> : ''} */}
        </div>
      </UsernameContext.Provider>
    );
  }
}

export default App;
