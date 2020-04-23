import React, { Component } from 'react';
import Card from './Card';

class GridView extends Component {
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <Card username={this.props.username} />
      </div>
    );
  }
}
export default GridView;
