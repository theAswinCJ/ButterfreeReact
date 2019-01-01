import React, { Component } from "react";
import "./FreeTrialSection.css";
import TextOne from "../Components/Texts/TextOne";
import InputOne from "../Components/Inputs/InputOne";

class FreeTrialSection extends Component {
  dataOne = {
    instanceID: "FreeTrialTitle",
    title: "Sign Up for a Free Trial"
  };

  dataTwo = {
    instanceID: "FreeTrialButton",
    image: "InputOne.png",
    width: "100%"
  };

  render() {
    return (
      <div className="FreeTrialSection">
        <TextOne data={this.dataOne} />
        <InputOne data={this.dataTwo} />
      </div>
    );
  }
}

export default FreeTrialSection;
