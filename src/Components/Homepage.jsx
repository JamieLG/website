import React, { Component } from "react";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Homepage Header</h2>

        <p>
          Introduction bla bla bla bla bla bla bla. Bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla. Bla bla bla
          bla bla bla bla bla bla bla bla bla bla.{" "}
        </p>
        <h2>Work experience</h2>
        <p>I did this</p>
        <p>And this</p>
      </div>
    );
  }
  componentDidMount() {
    this.props.setCurrentPage("home");
  }
}

export default Homepage;
