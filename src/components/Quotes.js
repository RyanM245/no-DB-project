import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Quote from "./Quote";

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      sayings: [],
    };
    this.getQuotes = this.getQuotes.bind(this);
  }

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes = () => {
    axios
      .get("/api/sayings")
      .then((res) => {
        //   console.log("hit front end")
        this.setState({
          sayings: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  

  render() {
    //   console.log(this.state.sayings)
    const mappedSayings = this.state.sayings.map((el, i) => {
      return <Quote data={el} key={i} />;
    });
    return (
      <div>
        <Header />
        {mappedSayings}
      </div>
    );
  }
}

export default Quotes;
