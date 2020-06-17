import React from 'react';
// import './App.scss';

function Information(props) {
  const { data } = props;
  const {
    public_repos,
    name,
    location,
    login,
    followers,
    following,
    html_url,
  } = data;
  return (
    <div className="information">
      {/* <b>User Details</b> */}
      <ul>
        <li>
          Name: <b>{name}</b>
        </li>
        <li>
          Username: <em>{login}</em>
        </li>
        <li>Location: {location}</li>
        <li>Public Repositories: {public_repos}</li>
        <li>Followers: {followers}</li>
        <li>Following: {following}</li>
      </ul>
      <button
        onClick={() => {
          window.open(html_url, '_blank');
        }}
      >
        Repository
      </button>
    </div>
  );
}
export default Information;
