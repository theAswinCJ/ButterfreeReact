import React, { Component } from "react";
import "./SocialProofSection.css";
import TextOne from "../Components/Texts/TextOne";
import Logos from "./LocalContainers/Logos";

class SocialProofSection extends Component {
  dataOne = {
    instanceID: "SocialProofTitle",
    title: "Automate the entire process"
  };

  render() {
    return (
      <div className="SocialProofSection">
        <TextOne data={this.dataOne} />
        <Logos />
      </div>
    );
  }
}

export default SocialProofSection;
