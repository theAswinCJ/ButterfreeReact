import React, { Component } from "react";
import "./SocialProofSection.css";
import TextTwo from "./Components/TextTwo";
import Logos from "./Components/Logos";

class SocialProofSection extends Component {
  render() {
    return (
      <div className="SocialProofSection">
        <TextTwo />
        <Logos />
      </div>
    );
  }
}

export default SocialProofSection;
