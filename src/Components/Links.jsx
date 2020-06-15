import React, { Component } from "react";
import { Link } from "@reach/router";

class Links extends Component {
  render() {
    return (
      <div>
        <h2>Links</h2>
        <div className="myAccounts">
          <h3>My Accounts</h3>
          <Link to="//github.com/JamieLG/">
            <img
              className="link"
              src="https://danielgibbs.co.uk/wp-content/uploads/2013/08/github-logo.png"
              alt="linkpic"
            ></img>
          </Link>
          <br></br>
          <Link to="//www.codewars.com/users/jlg87">
            <img
              className="link"
              src="https://www.codewars.com/assets/landing/logo-by-q-b02277e06ebda16eeaf3890c1c6b2e7fd35e8d8fd3ecdcc11061932cbbab9957.png"
              alt="linkpic"
            ></img>
          </Link>
        </div>
        <div className="myAccounts">
          <h3>Learning Resources</h3>
          <Link to="//northcoders.com/  ">
            <img
              className="link"
              src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png"
              alt="linkpic"
            ></img>
          </Link>
          <br></br>
          <Link to="//www.freecodecamp.org//  ">
            <img
              className="link"
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png"
              alt="linkpic"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.setCurrentPage("links");
  }
}

export default Links;
