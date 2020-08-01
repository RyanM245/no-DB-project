import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick = {()=> this.props.deleteQuote(this.props.id)}>Delete</button>
        <button onClick = {this.props.toggleEdit}>Edit</button>
      </div>
    );
  }
}

export default Buttons;
