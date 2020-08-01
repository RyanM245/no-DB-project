import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  saveQuote = () => {
    this.props.editQuote(this.props.id, this.props.saying);
    this.props.toggleEdit();
  };
  render() {
    return (
      <div>
        <button onClick={this.saveQuote}>Save</button>
        <button onClick={this.props.toggleEdit}>Cancel</button>
      </div>
    );
  }
}

export default Edit;
