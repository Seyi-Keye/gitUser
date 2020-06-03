import React from 'react';

function Avatar(props) {
  const avatar_url = 'http://svgur.com/i/65U.svg';
  let { picture } = props;
  picture = picture || avatar_url;
  return <img src={picture} alt="avatar" />;
}
export default Avatar;
