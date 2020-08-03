import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Quote from "./Quote";
import EnterIcon from './Enter'

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      sayings: [],
      saying: "",
    };
    this.getQuotes = this.getQuotes.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
    this.editQuote = this.editQuote.bind(this);
  }

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes = () => {
    axios
      .get("/api/sayings")
      .then((res) => {
        this.setState({
          sayings: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  addQuote = (saying) => {
    axios
      .post("/api/sayings", { saying })
      .then((res) => {
        this.setState({
          sayings: res.data,
          saying: ""
        });
      })
      .catch((err) => console.log(err));
  };

  deleteQuote = (id) => {
    axios
      .delete(`/api/sayings/${id}`)
      .then((res) => {
        this.setState({ sayings: res.data });
      })
      .catch((err) => console.log(err));
  };
  editQuote = (id, saying) => {
    axios
      .put(`/api/sayings/${id}`, { saying })
      .then((res) => {
        this.setState({
          sayings: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  universalHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { saying } = this.state;
    //   console.log(this.state.sayings)
    const mappedSayings = this.state.sayings.map((el, i) => {
      return (
        <Quote
          data={el}
          key={i}
          deleteQuote={this.deleteQuote}
          editQuote={this.editQuote}
          universalHandler={this.universalHandler}
          className="quote"
        />
      );
    });
    return (
      <div>
        <Header />
        <main>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.addQuote(saying);
              this.setState({ saying: "" });
            }}
            className="add-quote"
          >
            <input
              placeholder="Fav Adam Quote/Moment."
              type="text"
              name="saying"
              value={saying}
              onChange={(e) => this.universalHandler(e)}
              className="main-input"
            />
            <EnterIcon onClick={() => this.addQuote(saying)} className="main-button"/>
              
            
          </form>
        </main>
        {mappedSayings}

        <img src = 'https://i.imgflip.com/4abk3x.gif'
        className = "beatsaber"/>
      </div>
    );
  }
}

export default Quotes;
