import React, { Component } from 'react';
// import { Get } from 'react-axios';

class SearchTool extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      username: '',
    };
  }

  handleSearchTextChange = (event) => {
    event.preventDefault();
    this.setState({ username: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.username);
  };

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          margin: 'auto',
          marginTop: '5%',
        }}
      >
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Type github username"
            style={{
              width: '20%',
              height: '30px',
              padding: '2px',
            }}
            value={this.state.username}
            onChange={this.handleSearchTextChange}
            name="githubUsername"
          />
          <button
            type="button"
            onClick={this.handleFormSubmit}
            style={{
              width: '10%',
              height: '30px',
              background: 'blue',
              color: 'white',
            }}
          >
            Search Github Users
          </button>
        </form>
      </div>
    );
  }
}

export default SearchTool;
