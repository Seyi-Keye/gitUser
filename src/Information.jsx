import React, { Component } from 'react';

class Information extends Component {
  render() {
    const { data } = this.props;
    const { public_repos, name, location, followers, following } = data;
    return (
      <div className="information">
        <b>User Details</b>
        <ul>
          <li>Name: {name}</li>
          <li>Location: {location}</li>
          <li>Public Repositories: {public_repos}</li>
          <li>Followers: {followers}</li>
          <li>Following: {following}</li>
        </ul>
      </div>
    );
  }
}
export default Information;
