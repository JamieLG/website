import React, { Component } from "react";
import ncNewsFe from "../Images/Screenshot from 2020-03-02 19-29-59.png";
import ncNewsBe from "../Images/Screenshot from 2020-03-03 08-54-24.png";
import cssIcon from "../Images/css.png";
import htmlIcon from "../Images/html.jpg";
import reactIcon from "../Images/react.png";
import phaserIcon from "../Images/phaser.png";
import socketIcon from "../Images/socket.png";
import jsIcon from "../Images/js.png";
import expressIcon from "../Images/express-logo.png";
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
          icons={[phaserIcon, socketIcon, reactIcon, cssIcon, htmlIcon, jsIcon]}
          description="Website with a chatroom that lets players group together and answer maths questions, then play a game where quiz performance affects player power. The game was created in Phaser.io and is run fully server side, all clients render the game in React.js using Socket.io messages from the Game Website Backend."
          hostedLink={[
            "//phasersocketgame.netlify.app/",
            "//www.youtube.com/watch?v=XCPmVTga2ro/",
          ]}
          gitLink="//github.com/JamieLG/gamefrontend"
        />
        <PortfolioPiece
          header="Game Website Backend"
          icons={[phaserIcon, socketIcon, expressIcon, jsIcon]}
          description="Express server using Socket.io to send and recieve messages. Using Phaser.io when players connect to the server it renders a game serverside and keeps track of each players information, it also hosts a chatroom for players to communicate. "
          hostedLink={["//phasersocketgame.herokuapp.com/", ,]}
          gitLink="//github.com/JamieLG/gamebackend"
        />
        <PortfolioPiece
          header="NC-News Frontend"
          icons={[reactIcon, cssIcon, htmlIcon, jsIcon]}
          description="Reddit style news aggregation website created using React letting users login, read and post comments and articles and vote on comments using my NC-News Backend API. The first website i made."
          hostedLink={["//newsfe.netlify.com/"]}
          gitLink="//github.com/JamieLG/fe-nc-news"
          img={ncNewsFe}
        />
        <PortfolioPiece
          header="NC-News Backend"
          icons={[expressIcon, jsIcon]}
          description="Restful API"
          hostedLink={["//jamie-backendapp.herokuapp.com/api"]}
          gitLink="//github.com/JamieLG/be-nc-news"
          img={ncNewsBe}
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
