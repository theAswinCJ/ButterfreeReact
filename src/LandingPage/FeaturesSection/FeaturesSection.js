import React, { Component } from "react";
import "./FeaturesSection.css";
import TextFour from "./Components/TextFour";
import BlurbThirteen from "./Components/BlurbThirteen";
import BlurbFourteen from "./Components/BlurbFourteen";
import BlurbFifteen from "./Components/BlurbFifteen";

class FeaturesSection extends Component {
  render() {
    return (
      <div className="FeaturesSection">
        <TextFour />
        <BlurbThirteen />
        <BlurbFourteen />
        <BlurbFifteen />
      </div>
    );
  }
}

export default FeaturesSection;
