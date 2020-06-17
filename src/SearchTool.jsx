import React, { useContext } from 'react';
// import Card from './Card';
// import UsernameContext from './UsernameContext';
import './searchTool.scss';

function SearchTool(props) {
  // let usernameContext = useContext(UsernameContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleSearch(event.target.githubUsername.value);
  };

  return (
    <div className="searchTool">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Github Username"
          name="githubUsername"
        />
        <button type="submit">Search</button>
      </form>
      {/* <Card username={usernameContext} /> */}
    </div>
  );
}

export default SearchTool;
