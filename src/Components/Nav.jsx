import React from "react";
import { Link } from "@reach/router";

function Nav(props) {
  return (
    <div className="topnav">
      <div>
        <Link
          className={props.currentPage === "home" ? "active" : "inactive"}
          to="/"
        >
          Home
        </Link>
        <Link
          className={props.currentPage === "portfolio" ? "active" : "inactive"}
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className={props.currentPage === "links" ? "active" : "inactive"}
          to="/links"
        >
          Links
        </Link>
      </div>
    </div>
  );
}

export default Nav;
