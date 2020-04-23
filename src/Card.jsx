import React, { Component } from 'react';
import Avatar from './Avatar';
import Information from './Information';

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
    console.log('component will update rendering');
    this.fetchEventPayload(username);
  }

  handleDisplay = (data) => {
    const result = data.map((datum, index) => {
      return (
        <div
          key={index.toString()}
          style={{
            display: 'flex',
            border: '5px solid white',
            background: 'grey',
            width: '70%',
            // boxSizing: "border-box",
            margin: 'auto',
            padding: '10px',
            height: '70px',
          }}
        >
          <Avatar picture={datum.actor} />
          <Information data={datum} />
        </div>
      );
    });
    return result;
  };

  fetchEventPayload = (username) => {
    console.log('eafawfeaw');
    fetch(`https://api.github.com/users/${username}`)
      .then((data) => {
        if (data.status !== 200) {
          console.log('error data', data.statusText);
          throw new Error(data.statusText);
        }
        return data.json();
      })
      .then((data) => {
        this.setState({ data });
        console.log(data, 'is it u?');
      })
      .catch((error) => this.setState({ error }));
  };

  checkError = (error) => {
    return <p style={{ padding: '10px', color: 'red' }}>{error.message}</p>;
  };

  render() {
    console.log('do we get here?');
    const data = this.state.data;
    const error = this.state.error;
    return (
      <div>
        {(data.length && this.handleDisplay(data)) || <p> NO results </p>}
        {error && this.checkError(error)}
      </div>
    );
  }
}
export default Card;
