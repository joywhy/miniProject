import React, { Component } from 'react';

class Controller extends Component {
  render() {
    return (
      <div>
        <h2>Next Player : {this.props.player}</h2>
        <button>Go to game start</button>
        <button>Go to move #1</button>
      </div>
    );
  }
}

export default Controller;
