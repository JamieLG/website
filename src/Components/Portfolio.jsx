import React, { Component } from "react";
import ncNewsFe from "../Images/Screenshot from 2020-03-02 19-29-59.png";
import ncNewsBe from "../Images/Screenshot from 2020-03-03 08-54-24.png";
import { Link } from "@reach/router";
import cssIcon from "../Images/css.png";
import htmlIcon from "../Images/html.jpg";
import reactIcon from "../Images/react.png";
import jsIcon from "../Images/js.png";
import PortfolioPiece from "./PortfolioPiece";

class Portfolio extends Component {
  state = {
    nCNewsFe: false,
    nCNewsBe: false,
    nCProject: false,
  };
  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <PortfolioPiece
          header="Game Website Frontend"
          icons={[reactIcon, jsIcon, cssIcon, htmlIcon]}
          description="Website with a chatroom that lets players group together and answer maths questions, then play a game where quiz performance affects player power. The game was created in Phaser.io and is run fully server side, all clients render the game in React.js using Socket.io messages from the Express.js server we built."
          hostedLink={["//www.youtube.com/watch?v=XCPmVTga2ro/"]}
          gitLink="//github.com/JamieLG/gamefrontend"
        />
        <PortfolioPiece
          header="NC-News Frontend"
          icons={[reactIcon, jsIcon, cssIcon, htmlIcon]}
          description="Website letting users login, read and post comments and articles
          using my API (NC-News Backend)."
          hostedLink={["//newsfe.netlify.com/"]}
          gitLink="//github.com/JamieLG/fe-nc-news"
          img={ncNewsFe}
        />
        <PortfolioPiece
          header="NC-News Backend"
          icons={[reactIcon, jsIcon, cssIcon, htmlIcon]}
          description="Restful API"
          hostedLink={["//jamie-backendapp.herokuapp.com/api"]}
          gitLink="//github.com/JamieLG/be-nc-news"
          img={ncNewsFe}
        />
      </div>
    );
  }
  componentDidMount() {
    this.props.setCurrentPage("portfolio");
  }
  showElement = (object) => {
    this.setState((currentState) => {
      console.log("sfsaf");
      return { [object]: !currentState[object] };
    });
  };
}

export default Portfolio;
