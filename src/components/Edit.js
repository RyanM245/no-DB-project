import React, { Component } from "react";
import ArrowLeft from './ArrowLeftIcon'
import Save from './Save'


class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  saveQuote = () => {
    const {editQuote,toggleEdit,id,saying} = this.props
    editQuote(id, saying);
    toggleEdit();
  };
  render() {
    return (
      <div className = 'btn-holder'>
        <Save onClick={this.saveQuote}
        className = 'save'
        />
        <ArrowLeft onClick={this.props.toggleEdit}
        className = 'arrowLeft'/>
      </div>
    );
  }
}

export default Edit;
