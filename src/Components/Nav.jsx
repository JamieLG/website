import React from "react";
import { Link } from "@reach/router";

function Nav(props) {
  return (
    <div>
      {console.log(props)}
      <div className="topnav">
        <Link className={props.currentPage === "home" && "active"} to="/home">
          Home
        </Link>
        <Link
          className={props.currentPage === "portfolio" && "active"}
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link className={props.currentPage === "links" && "active"} to="/links">
          Links
        </Link>
        {/* <a
          className={props.currentPage === "Homepage" && "active"}
          href="index"
        >
          Home
        </a>
        <a
          className={props.currentPage === "Projects" && "active"}
          href="portfolio"
        >
          Projects
        </a>
        <a className={props.currentPage === "Links" && "active"} href="links">
          Links
        </a> */}
      </div>
    </div>
  );
}

export default Nav;
