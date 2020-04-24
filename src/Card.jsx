import React, { Component } from 'react';
import Avatar from './Avatar';
import Information from './Information';
import stack from './stack';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidMount() {
    const { username } = this.props;
    this.fetchEventPayload(username);
  }

  handleDisplay = (data) => {
    return (
      <div
        key={data.id}
        style={{
          display: 'flex',
          border: '5px solid white',
          width: '30%',
          margin: 'auto',
          padding: '10px',
          height: '100%',
          borderRadius: '4%',
        }}
      >
        <Avatar picture={data.avatar_url} />
        <p style={{ color: 'grey', fontSize: 'bold' }} onClick={stack.pop}>
          x
        </p>
        <Information data={data} />
      </div>
    );
  };

  fetchEventPayload = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((data) => {
        if (data.status !== 200) {
          console.log('error data', data.statusText);
          throw new Error(data.statusText);
        }
        return data.json();
      })
      .then((data) => {
        const {
          avatar_url,
          followers,
          following,
          location,
          name,
          public_repos,
        } = data;

        stack.push({
          avatar_url,
          followers,
          following,
          location,
          name,
          public_repos,
        });
        // remove setState
        this.setState({ data });
      })
      .catch((error) => this.setState({ error }));
  };

  checkError = (error) => {
    return <p style={{ padding: '10px', color: 'red' }}>{error.message}</p>;
  };

  render() {
    const data = this.state.data;
    const error = this.state.error;
    return (
      <div style={{ margin: '10px' }}>
        {data && this.handleDisplay(data)}
        {error && this.checkError(error)}
      </div>
    );
  }
}
export default Card;
