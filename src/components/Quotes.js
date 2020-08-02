import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Quote from "./Quote";



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
    //   console.log(this.state.sayings)
    const mappedSayings = this.state.sayings.map((el, i) => {
      return (
        <Quote
          data={el}
          key={i}
          deleteQuote={this.deleteQuote}
          editQuote={this.editQuote}
          className = "quote"
        />
      );
    });
    return (
      <div>
        <Header />
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.addQuote(this.state.saying);
              this.setState({ saying: "" });
            }}
            className = 'add-quote'
          >
            <input
              placeholder="Fav Adam Quote/Moment."
              type="text"
              name="saying"
              value={this.state.saying}
              onChange={(e) => this.universalHandler(e)}
              className="main-input"
            />
            <button onClick={() => this.addQuote} className="main-button">
              Enter
            </button>
          </form>
        </div>
        {mappedSayings}
        
      </div>
    );
  }
}

export default Quotes;
