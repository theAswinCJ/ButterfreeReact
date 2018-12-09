import React, { Component } from "react";
import "./IntroSection.css";
import BlurbOne from "./Components/BlurbOne";
import BlurbTwo from "./Components/BlurbTwo";
import BlurbThree from "./Components/BlurbThree";
import CTA from "./Components/CTA";
import ImageOne from "./Components/ImageOne";
import SiteLogo from "./Components/SiteLogo";
import TextOne from "./Components/TextOne";
import Header from "./Components/Header";

class IntroSection extends Component {
  render() {
    return (
      <div className="IntroSection">
        <SiteLogo />
        <CTA />
        <Header />
        <TextOne />
        <ImageOne />
        <BlurbOne />
        <BlurbTwo />
        <BlurbThree />
      </div>
    );
  }
}

export default IntroSection;
