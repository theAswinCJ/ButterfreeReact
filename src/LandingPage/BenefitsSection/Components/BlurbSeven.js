import React, { Component } from "react";
import "./BlurbSeven.css";
import IconTwo from "../Assets/IconTwo.svg";

class BlurbSeven extends Component {
  render() {
    return (
      <div className="BlurbSeven">
        <img src={IconTwo} width="30%" />
        <h2>Get Paid Early</h2>
        <p>
          Freelancers and agencies can clear their bills right after development
          without worrying about client delays
        </p>
      </div>
    );
  }
}

export default BlurbSeven;
