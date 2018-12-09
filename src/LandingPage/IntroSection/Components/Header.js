import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <a>WHO'S IT FOR</a>
        <a>HOW IT WORKS</a>
        <a>PRICING</a>
        <a>LOGIN</a>
      </div>
    );
  }
}

export default Header;
