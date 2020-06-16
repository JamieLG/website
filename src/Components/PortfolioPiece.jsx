import React, { Component } from "react";
import { Link } from "@reach/router";

export default class PortfolioPiece extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <div className="portfolioPiece">
        <div className="portfolioHeader">
          <h3>{this.props.header}</h3>
          <div className="portfolioIconHolder">
            {console.log(this.props.icons)}
            {this.props.icons.map((icon) => {
              return (
                <img className="portfolioIcon" src={icon} alt="CSS icon" />
              );
            })}
          </div>
        </div>
        <p>{this.props.description}</p>
        <div className="portfolioLinks">
          {this.props.hostedLink.map((link) => {
            return (
              <>
                <Link to={link}>https:{link}</Link> <br></br>
              </>
            );
          })}
        </div>
        {this.props.img && (
          <>
            <button
              className="portfolioShowButton"
              onClick={() => {
                this.showElement("show");
              }}
            >
              {this.state.show === false
                ? "Show Screenshot"
                : "Hide Screenshot"}
            </button>
            <br></br>
          </>
        )}
        {this.props.img &&
          this.props.img.map((screenshot) => {
            return (
              <>
                {this.state.show === true && (
                  <img className="screenshot" src={screenshot}></img>
                )}
              </>
            );
          })}

        <Link to={this.props.gitLink}>
          <img
            className="link"
            src="https://danielgibbs.co.uk/wp-content/uploads/2013/08/github-logo.png"
          ></img>
        </Link>
      </div>
    );
  }
  showElement = (object) => {
    this.setState((currentState) => {
      let newShowState = !currentState.show;
      return { show: newShowState };
    });
  };
}