import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router";


  function PortfolioPiece(props) {

  const [shown, setShown] = useState(false)

  useEffect(() => {    
    setShown(false);  
  }, []);

    return (
      <div className="portfolioPiece">
        <div className="portfolioHeader">
          <h3>{props.header}</h3>
          <div className="portfolioIconHolder">
            {props.icons.map((icon) => {
              return (
                <img className="portfolioIcon" src={icon} alt="CSS icon" />
              );
            })}
          </div>

          <p>{props.description}</p>
          <div className="portfolioLinks">
            {props.hostedLink.map((link) => {
              return (
                <>
                  <Link to={link}>{link}</Link> <br></br>
                </>
              );
            })}
          </div>
        </div>
        {props.img !== undefined && (
          <>
            <button
              onClick={() => {
               setShown(!shown);
              }}
            >
              {shown === false
                ? "Show Screenshot"
                : "Hide Screenshot"}
            </button>
            <br></br>
            {props.img.map((screenshot) => {
              return (
                <>
                  {shown === true && (
                    <img
                      className="screenshot"
                      src={screenshot}
                      alt="screenshot"
                    ></img>
                  )}
                </>
              );
            })}
          </>
        )}

        <Link to={props.gitLink}>
          <img
            className="link-link"
            src="https://danielgibbs.co.uk/wp-content/uploads/2013/08/github-logo.png"
            alt="linkpic"
          ></img>
        </Link>
      </div>
    );
  }

  export default PortfolioPiece;