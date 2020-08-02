import React, { Component } from "react";
import ArrowLeft from './ArrowLeftIcon'
import Save from './Save'


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
      <div className = 'btn-holder'>
        <Save onClick={this.saveQuote}
        className = 'save'/>
        <ArrowLeft onClick={this.props.toggleEdit}
        className = 'arrowLeft'/>
      </div>
    );
  }
}

export default Edit;
