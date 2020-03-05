import React, { Component } from "react";
import ncNewsFe from "../Images/Screenshot from 2020-03-02 19-29-59.png";
import ncNewsBe from "../Images/Screenshot from 2020-03-03 08-54-24.png";
import { Link } from "@reach/router";
import cssIcon from "../Images/css.png";
import htmlIcon from "../Images/html.jpg";
import reactIcon from "../Images/react.png";
import jsIcon from "../Images/js.png";

class Portfolio extends Component {
  state = {
    nCNewsFe: false,
    nCNewsBe: false,
    nCProject: false
  };
  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <div className="portfolioPiece">
          <h3>NC-Project</h3>
        </div>
        <div className="portfolioPiece">
          <div className="portfolioHeader">
            <h3>NC-News Frontend</h3>
            <div className="portfolioIconHolder">
              <img className="portfolioIcon" src={reactIcon} alt="CSS icon" />
              <img className="portfolioIcon" src={jsIcon} alt="CSS icon" />
              <img className="portfolioIcon" src={cssIcon} alt="CSS icon" />
              <img className="portfolioIcon" src={htmlIcon} alt="CSS icon" />
            </div>
          </div>
          <p>
            Website letting users login, read and post comments and articles
            using my API ("NC-News Backend").
          </p>
          <Link to="//newsfe.netlify.com/">
            <p>https://newsfe.netlify.com/</p>
          </Link>
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
            <img className="screenshot" src={ncNewsFe}></img>
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
          <p>API serving articles and comments . </p>
          <Link to="//jamie-backendapp.herokuapp.com/api">
            <p>https://jamie-backendapp.herokuapp.com/api</p>
          </Link>
          <button
            onClick={() => {
              this.showElement("nCNewsBe");
            }}
          >
            {this.state.nCNewsBe === false
              ? "Show Screenshot"
              : "Hide Screenshot"}
          </button>
          <br></br>
          {this.state.nCNewsBe === true && (
            <img className="screenshot" src={ncNewsBe}></img>
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
