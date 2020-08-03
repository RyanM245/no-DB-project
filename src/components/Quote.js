import React, { Component } from "react";
import Buttons from "./Buttons";
import Edit from "./Edit";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      saying: props.data.saying,
    };
  }
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };
  universalHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { editQuote, deleteQuote, data } = this.props;
    const { saying } = this.state;
    return (
      <div className="quote">
        {this.state.edit ? (
          //   edit is true
          <div>
            <textarea
              onChange={this.universalHandler}
              name="saying"
              type="text"
              className="edit-input"
              value={saying}
            ></textarea>
            <Edit
              toggleEdit={this.toggleEdit}
              editQuote={editQuote}
              id={data.id}
              saying={saying}
              universalHandler={this.props.universalHandler}
            />
          </div>
        ) : (
          //edit is false
          <div>
            <h1 className="saying">{data.saying}</h1>
            <Buttons
              deleteQuote={deleteQuote}
              id={data.id}
              toggleEdit={this.toggleEdit}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Quote;
