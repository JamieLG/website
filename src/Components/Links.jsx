import React, { Component } from "react";
import { Link } from "@reach/router";

class Links extends Component {
  render() {
    return (
      <div>
        <h2>Links</h2>
        <div className="myAccounts">
          <h3>My Accounts</h3>
          <Link to="//github.com/JamieLG/">
            <img
              className="link"
              src="https://danielgibbs.co.uk/wp-content/uploads/2013/08/github-logo.png"
            ></img>
          </Link>
          <br></br>
          <Link to="//www.codewars.com/users/jlg87">
            <img
              className="link"
              src="https://www.codewars.com/assets/landing/logo-by-q-b02277e06ebda16eeaf3890c1c6b2e7fd35e8d8fd3ecdcc11061932cbbab9957.png"
            ></img>
          </Link>
        </div>
        <div className="myAccounts">
          <h3>Learning Resources</h3>
          <Link to="//northcoders.com/  ">
            <img
              className="link"
              src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png"
            ></img>
          </Link>
          <br></br>
          <Link to="//www.freecodecamp.org//  ">
            <img
              className="link"
              src="https://yt3.ggpht.com/nIDcRIFy3x1r8Oc6n4G_1pFzsNX4kr8GHVhHDo9naVuJPVEFeZehsXd8I2gyycmmspb2GoWJCcU=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.setCurrentPage("links");
  }
}

export default Links;
