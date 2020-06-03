import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import Information from './Information';

function Card(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (props.username) {
      console.log(props.username);
      fetchEventPayload(props.username);
    }
  }, [props.username]);

  const filterItem = (id) => {
    setData(data.filter((x) => x.id !== id));
  };

  const handleDisplay = (data) => {
    return (
      <div
        key={data.id}
        style={{
          display: 'inline-block',
          border: '5px solid black',
          minWidth: '33%',
          margin: '2px',
          padding: '10px',
          borderRadius: '4%',
          marginTop: '10px',
        }}
      >
        <Avatar picture={data.avatar_url} />
        <Information data={data} style={{ width: '80%' }} />
        <div style={{ margin: '0' }}>
          <p
            style={{ color: 'grey', fontSize: '50px' }}
            onClick={() => {
              filterItem(data.id);
            }}
          >
            x
          </p>
        </div>
      </div>
    );
  };

  const fetchEventPayload = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((data) => {
        if (data.status !== 200) {
          console.log('error data', data.statusText);
          throw new Error(data.statusText);
        }
        return data.json();
      })
      .then((result) => {
        const {
          id,
          avatar_url,
          followers,
          following,
          location,
          name,
          public_repos,
        } = result;

        const newData = {
          id,
          avatar_url,
          followers,
          following,
          location,
          name,
          public_repos,
        };
        return setData([...data.filter((x) => x.id !== id), newData]);
      })
      .catch((error) => setError(error));
  };

  const checkError = (error) => {
    return <p style={{ padding: '10px', color: 'red' }}>{error.message}</p>;
  };

  return (
    <div className="container">
      {data && data.reverse().map((user) => handleDisplay(user))}
      {error && checkError(error)}
    </div>
  );
}
export default Card;
