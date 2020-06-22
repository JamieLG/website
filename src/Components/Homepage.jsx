import React, { Component } from "react";
import jamie from "../Images/jamie.png";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Homepage</h2>
        <div className="homepageInfo">
          <img className="homepageImg" src={jamie} alt="me" />
          <p className="homepageExplain">
            With limited space on my CV i wanted a place to add a little more
            information about the work i have done and a place to link videos,
            screenshots and other websites with information about me and my
            coding work.
          </p>
        </div>
        <div className="personalInfo">
          <h2>About me</h2>
          <p>
            Making the transition from military life I decided to pursue my
            passion for software development completing a 3 month JavaScript
            full stack developer bootcamp. A good base in JavaScript, React and
            CSS, I’m a fast learner and keen to grow as a developer learning new
            technologies.
          </p>
          {/* <h2>Experience</h2>
          <p>
            Dec2019-March2020 - Northcoders – Trainee Full-stack Developer{" "}
            <br></br>
            <br></br>
            Full stack coding bootcamp in Manchester teaching a practical,
            industry-led curriculum. All code was TDD and utilised version
            control (Git) and pair programming throughout. All projects were
            made in an agile environment, we had daily standups and utilised a
            kanban board.
            <br></br>
            <br></br>
            Feb2016-Nov2019 - Royal Signals - Communication Systems Engineer
            <br></br>
            <br></br>
            Information about job here
          </p> */}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.setCurrentPage("home");
  }
}

export default Homepage;
