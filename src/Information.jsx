import React from 'react';

function Information(props) {
  const { data } = props;
  const { public_repos, name, location, login, followers, following } = data;
  return (
    <div className="information">
      <b>User Details</b>
      <ul>
        <li>Name: {name}</li>
        <li>Login: {login}</li>
        <li>Location: {location}</li>
        <li>Public Repositories: {public_repos}</li>
        <li>Followers: {followers}</li>
        <li>Following: {following}</li>
      </ul>
    </div>
  );
}
export default Information;
