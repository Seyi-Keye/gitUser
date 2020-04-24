import React, { Component } from 'react';

class Avatar extends Component {
  render() {
    const avatar_url = 'http://svgur.com/i/65U.svg';
    let { picture } = this.props;
    picture = picture ? (
      <img src={picture} alt="user avatar" />
    ) : (
      <img src={avatar_url} alt="dafault avatar" />
    );
    return picture;
  }
}
export default Avatar;
