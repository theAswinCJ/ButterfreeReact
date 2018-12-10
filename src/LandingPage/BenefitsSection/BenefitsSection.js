import React, { Component } from "react";
import "./BenefitsSection.css";
import BlurbFive from "./Components/BlurbFive";
import BlurbSix from "./Components/BlurbSix";
import BlurbSeven from "./Components/BlurbSeven";
import BlurbEight from "./Components/BlurbEight";

class BenefitsSection extends Component {
  render() {
    return (
      <div className="BenefitsSection">
        <BlurbFive />
        <BlurbSix />
        <BlurbSeven />
        <BlurbEight />
      </div>
    );
  }
}

export default BenefitsSection;
