import React from "react";
import { Link } from "@reach/router";

function Nav(props) {
  return (
    <div>
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
      </div>
    </div>
  );
}

export default Nav;
