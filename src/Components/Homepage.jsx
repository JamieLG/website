import React, { Component } from "react";
import jamie from "../Images/jamie.png";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Homepage</h2>
        <div className="homepageInfo">
          <img className="homepageImg" src={jamie} alt="imageofme" />
          <p className="homepageExplain">
            With limited space on my CV i wanted a place to add a little more
            information about me and my coding projects.
            <br></br>
            <br></br>
            "Making the transition from military life I decided to pursue my
            passion for software development completing a 3 month JavaScript
            full stack developer bootcamp. A good base in JavaScript, React and
            CSS, I’m a fast learner and keen to grow as a developer learning new
            technologies."
          </p>
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   this.props.setCurrentPage("home");
  // }
}

export default Homepage;
