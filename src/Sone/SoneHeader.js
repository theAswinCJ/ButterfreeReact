import React, { Component } from "react";
import "./SoneHeader.css";

class SoneHeader extends Component {
  render() {
    return (
      <div className="SoneHeader">
        <a>WHO'S IT FOR</a>
        <a>HOW IT WORKS</a>
        <a>PRICING</a>
        <a>LOGIN</a>
      </div>
    );
  }
}

export default SoneHeader;
