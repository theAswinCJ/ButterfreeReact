import React, { Component } from "react";
import "./FreeTrialSection.css";
import TextFive from "./Components/TextFive";
import SignUp from "./Components/SignUp";

class FreeTrialSection extends Component {
  render() {
    return (
      <div className="FreeTrialSection">
        <TextFive />
        <SignUp />
      </div>
    );
  }
}

export default FreeTrialSection;
