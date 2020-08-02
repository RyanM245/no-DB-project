import React, { Component } from "react";
import EditCircleIcon from './EditCircleIcon'
import XIcon from './XIcon'



class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className = 'btn-holder'>
         <XIcon onClick={() => this.props.deleteQuote(this.props.id)}
        className = 'delete-btn'/>

        <EditCircleIcon onClick={this.props.toggleEdit}
        className = 'edit-icon'/>
      </div>
    );
  }
}

export default Buttons;
