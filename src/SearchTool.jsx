import React, { Component } from 'react';
import Card from './Card';

class SearchTool extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      username: '',
      prevUsername: '',
      submitted: false,
    };
  }

  handleSearchTextChange = (event) => {
    event.preventDefault();
    if (this.state.submitted) {
      this.setState({ submitted: false });
    }
    this.setState({ username: event.target.value, submitted: false });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true, prevUsername: this.state.username });
    // this.props.handleSearch(this.state.username);
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
        <form>
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
        {this.state.username.length && this.state.submitted ? (
          <Card username={this.state.username} />
        ) : (
          ''
        )}
        {this.state.prevUsername.length && !this.state.submitted ? (
          <Card username={this.state.prevUsername} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default SearchTool;
