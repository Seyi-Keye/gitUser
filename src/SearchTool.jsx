import React, { Component } from 'react';
import Card from './Card';
import UsernameContext from './UsernameContext';

class SearchTool extends Component {
  static contextType = UsernameContext;

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(event.target.githubUsername.value);
  };

  render() {
    return (
      <div
        style={{
          // display: 'flex',
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
            name="githubUsername"
          />
          <button
            type="submit"
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
        <Card username={this.context} />
      </div>
    );
  }
}

export default SearchTool;
