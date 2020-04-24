import React, { Component } from 'react';
import Avatar from './Avatar';
import Information from './Information';
import UsernameContext from './UsernameContext';

class Card extends Component {
  static contextType = UsernameContext;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidUpdate(prevprops) {
    if (prevprops.username !== this.props.username) {
      this.setState({ error: '' });
      this.fetchEventPayload(this.props.username);
    }
  }

  filterItem = (id) => {
    this.setState({
      data: this.state.data.filter((x) => x.id !== id),
    });
  };

  handleDisplay = (data) => {
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
              this.filterItem(data.id);
            }}
          >
            x
          </p>
        </div>
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
          id,
          avatar_url,
          followers,
          following,
          location,
          name,
          public_repos,
        } = data;

        const newData = {
          id,
          avatar_url,
          followers,
          following,
          location,
          name,
          public_repos,
        };
        this.setState({
          data: [...this.state.data.filter((x) => x.id !== id), newData],
        });
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
      <div className="container">
        {data && data.reverse().map((user) => this.handleDisplay(user))}
        {error && this.checkError(error)}
      </div>
    );
  }
}
export default Card;
