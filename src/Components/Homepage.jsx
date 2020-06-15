import React, { Component } from "react";
import jamie from "../Images/jamie.png";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Homepage</h2>
        <img className="homepageImg" src={jamie} alt="me" />
        <div className="personalInfo">
          <p>
            A little background information? I dont want to put too much on here
            THATS WHAT A CV IS FOR!
          </p>
          <h2>Work experience</h2>
          <p>I did this</p>
          <p>And this</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.setCurrentPage("home");
  }
}

export default Homepage;
