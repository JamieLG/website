import React, { Component } from "react";
import ncNews from "../Images/Screenshot from 2020-03-02 19-29-59.png";
import { Link } from "@reach/router";

class Portfolio extends Component {
  state = {
    nCNewsFe: false
  };
  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <div className="portfolioPiece">
          <h3>NC-Project</h3>
        </div>
        <div className="portfolioPiece">
          <h3>NC-News Frontend</h3>
          <p>
            {" "}
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla{" "}
          </p>
          <button
            onClick={() => {
              this.showElement("nCNewsFe");
            }}
          >
            {this.state.nCNewsFe === false
              ? "Show Screenshot"
              : "Hide Screenshot"}
          </button>
          <br></br>
          {this.state.nCNewsFe === true && (
            <img className="screenshot" src={ncNews}></img>
          )}
          <Link to="//github.com/JamieLG/fe-nc-news">
            <img
              className="link"
              src="https://danielgibbs.co.uk/wp-content/uploads/2013/08/github-logo.png"
            ></img>
          </Link>
        </div>
        <div className="portfolioPiece">
          <h3>NC-News Backend</h3>
          <p>
            {" "}
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla{" "}
          </p>
          <button
            onClick={() => {
              this.showElement("nCNewsFe");
            }}
          >
            {this.state.nCNewsFe === false
              ? "Show Screenshot"
              : "Hide Screenshot"}
          </button>
          <br></br>
          {this.state.nCNewsFe === true && (
            <img className="screenshot" src={ncNews}></img>
          )}
          <Link to="//github.com/JamieLG/fe-nc-news">
            <img
              className="link"
              src="https://danielgibbs.co.uk/wp-content/uploads/2013/08/github-logo.png"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.setCurrentPage("portfolio");
  }
  showElement = object => {
    this.setState(currentState => {
      console.log("sfsaf");
      return { [object]: !currentState[object] };
    });
  };
}

export default Portfolio;
