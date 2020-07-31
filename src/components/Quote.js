import React, { Component } from "react";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.props.data.saying}</h1>
      </div>
    );
  }
}

export default Quote;
