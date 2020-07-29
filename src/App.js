import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import Portfolio from "./Components/Portfolio";
import Links from "./Components/Links";

class App extends Component {
  state = {
    currentPage: "portfolio",
  };
  render() {
    return (
      <div>
        <Header />
        <Nav currentPage={this.state.currentPage} />
        <Router>
          {/* <Homepage path="/" setCurrentPage={this.setCurrentPage} /> */}
          <Portfolio path="/*" setCurrentPage={this.setCurrentPage} />
          <Links path="/links" setCurrentPage={this.setCurrentPage} />

          <Homepage path="/*" />
        </Router>
      </div>
    );
  }
  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };
}

export default App;
