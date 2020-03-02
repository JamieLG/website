import React, { Component } from "react";

class Links extends Component {
  render() {
    return (
      <div>
        <h2>Links Header</h2>
      </div>
    );
  }
  componentDidMount() {
    this.props.setCurrentPage("links");
  }
}

export default Links;
