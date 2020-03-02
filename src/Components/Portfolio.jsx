import React, { Component } from "react";
import ncNews from "../Images/Screenshot from 2020-03-02 19-29-59.png";
import { Link } from "@reach/router";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <h3>NC-Project</h3>
        <h3>NC-News Frontend</h3>

        <img className="screenshot" src={ncNews}></img>
        <Link to="//github.com/JamieLG/fe-nc-news">
          <img
            className="link"
            src="https://danielgibbs.co.uk/wp-content/uploads/2013/08/github-logo.png"
          ></img>
        </Link>
        <h3>NC-News Frontend</h3>

        <img className="screenshot" src={ncNews}></img>
        <Link to="//github.com/JamieLG/be-nc-news">
          <img
            className="link"
            src="https://danielgibbs.co.uk/wp-content/uploads/2013/08/github-logo.png"
          ></img>
        </Link>
      </div>
    );
  }
  componentDidMount() {
    this.props.setCurrentPage("portfolio");
  }
}

export default Portfolio;
