import React, { Component } from 'react';
import moment from 'moment';

class Information extends Component {
  render() {
    const { data } = this.props;
    const type = data.type;
    const date = moment(data.created_at).toString();
    const name = data.actor.display_login;
    return (
      <div
        style={{
          color: 'white',
          marginTop: '20px',
          padding: '10px',
        }}
      >
        {data ? `${type} created on ${date} by ${name}` : ''}
      </div>
    );
  }
}
export default Information;
