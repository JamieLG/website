import React from "react";
import { Link } from "@reach/router";
import linkedInImg from "../Images/Screenshot from 2020-03-02 21-19-31.png";

function Header(props) {
  return (
    <div className="header">
      <h1 className="siteHeader">Jamie Gormley</h1>
      <div className="contactInfo">
        <p className="siteHeaderEmail">JamieGormley1987@Outlook.com</p>
        <Link to="//www.linkedin.com/in/jamie-gormley-086802184/">
          <img className="constactLink" src={linkedInImg}></img>
        </Link>
      </div>
    </div>
  );
}

export default Header;
