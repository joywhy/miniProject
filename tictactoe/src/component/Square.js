import React from 'react';
import './Square.css';
export default class Squre extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: 'x' });
        }}
      >
        {this.state.value}
      </button>
    );
  }
}
