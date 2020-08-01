import React, { Component } from "react";
import Buttons from './Buttons'
import Edit from './Edit'

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
        edit: false,
        saying: ""
    };

  }
    toggleEdit = () => {
    this.setState({edit: !this.state.edit})
}
universalHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
          {
            //   edit is true
              this.state.edit ? (
                  <div>
                    <input
                    onChange = {this.universalHandler}
                    name= "saying"/>
                    <Edit toggleEdit = {this.toggleEdit}
                    editQuote = {this.props.editQuote}
                    id = {this.props.data.id}
                    saying = {this.state.saying} />  
                  </div>
              ) : (
                  <div>
                      <h1>{this.props.data.saying}</h1>
                      <Buttons 
                      deleteQuote = {this.props.deleteQuote}
                      id = {this.props.data.id}
                      toggleEdit = {this.toggleEdit}
                      />

                  </div>
              )
          }
      </div>
    );
  }
}

export default Quote;
