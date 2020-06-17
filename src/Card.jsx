import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import Information from './Information';
import './card.scss';

function Card(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchEventPayload = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const result = await response.json();

      const {
        id,
        avatar_url,
        followers,
        following,
        location,
        login,
        name,
        public_repos,
        html_url,
      } = result;

      const newData = {
        id,
        avatar_url,
        followers,
        following,
        location,
        login,
        name,
        public_repos,
        html_url,
      };
      return setData([...data.filter((x) => x.id !== id), newData]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (props.username) {
      fetchEventPayload(props.username);
    }
  }, [props.username]);

  const filterItem = (id) => {
    setData(data.filter((x) => x.id !== id));
  };

  const handleDisplay = (data) => {
    return (
      <div className="card" key={data.id}>
        <div className="card__header">
          <Avatar picture={data.avatar_url} />
          <div className="card__close">
            <p
              className="card__close--body"
              onClick={() => {
                filterItem(data.id);
              }}
            >
              x
            </p>
          </div>
        </div>
        <Information data={data} />
      </div>
    );
  };

  const checkError = (error) => {
    return <p className="card__error">{error.message}</p>;
  };

  return (
    <div className="card-container">
      {data.reverse().map(handleDisplay)}
      {error && checkError(error)}
    </div>
  );
}
export default Card;
