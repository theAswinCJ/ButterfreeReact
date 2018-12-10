import React, { Component } from "react";
import "./BlurbEight.css";
import IconThree from "../Assets/IconThree.svg";

class BlurbEight extends Component {
  render() {
    return (
      <div className="BlurbEight">
        <img src={IconThree} width="30%" />
        <h2>Save a bunch of time</h2>
        <p>
          Take full control of your time and get the peace of mind to accept
          more clients than usual.
        </p>
      </div>
    );
  }
}

export default BlurbEight;
