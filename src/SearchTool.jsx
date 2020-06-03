import React, { useContext } from 'react';
import Card from './Card';
import UsernameContext from './UsernameContext';

function SearchTool(props) {
  let usernameContext = useContext(UsernameContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleSearch(event.target.githubUsername.value);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        margin: 'auto',
        marginTop: '5%',
      }}
    >
      <form onSubmit={handleFormSubmit}>
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
            background: 'black',
            color: 'white',
          }}
        >
          Search Github Users
        </button>
      </form>
      <Card username={usernameContext} />
    </div>
  );
}

export default SearchTool;
