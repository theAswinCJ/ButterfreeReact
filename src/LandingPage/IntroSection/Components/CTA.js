import React, { Component } from "react";
import "./CTA.css";
import Button from "../Assets/Button.svg";

class CTA extends Component {
  render() {
    return (
      <div className="CTA">
        <img src={Button} width="200px" />
      </div>
    );
  }
}

export default CTA;
