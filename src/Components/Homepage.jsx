import React, { Component } from "react";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Homepage</h2>
        <img
          className="homepageImg"
          src="https://f0.pngfuel.com/png/167/310/beige-and-red-face-illustration-eye-mouth-smile-lip-eye-png-clip-art-thumbnail.png"
          alt="me"
        />
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
