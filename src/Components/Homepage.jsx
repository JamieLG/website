import React, { Component } from "react";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Homepage</h2>
        <img
          src="https://nofilmschool.com/sites/default/files/styles/article_wide/public/rambo_0.jpg?itok=K3d91BmS"
          alt="me"
        />
        <p>
          Introduction bla bla bla bla bla bla bla. Bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla. Bla bla bla
          bla bla bla bla bla bla bla bla bla bla. Introduction bla bla bla bla
          bla bla bla. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla. Bla bla bla bla bla bla bla bla bla bla
          bla bla bla. Introduction bla bla bla bla bla bla bla. Bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.
          Bla bla bla bla bla bla bla bla bla bla bla bla bla. Introduction bla
          bla bla bla bla bla bla. Bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla. Bla bla bla bla bla bla bla
          bla bla bla bla bla bla.{" "}
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
