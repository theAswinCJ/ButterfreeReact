import React, { Component } from "react";
import "./BlurbFourteen.css";
import img from "../Assets/itwo.png";

class BlurbFourteen extends Component {
  render() {
    return (
      <div className="BlurbFourteen">
        <img src={img} width="80%" />
        <h2>Command Line Tools</h2>
        <p>
          Setting up the project, adding constraints, and creating a dashboard
          entry can be done within the terminal.
        </p>
      </div>
    );
  }
}

export default BlurbFourteen;
