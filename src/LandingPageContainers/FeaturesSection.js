import React, { Component } from "react";
import "./FeaturesSection.css";
import TextOne from "../Components/Texts/TextOne";
import BlurbTwo from "../Components/Blurbs/BlurbTwo";

class FeaturesSection extends Component {
  dataOne = {
    instanceID: "FeaturesBlurbTitle",
    title: "Here's what we offer"
  };

  dataTwo = {
    instanceID: "FeaturesBlurbOne",
    image: "FeatureOne.png",
    width: "80%",
    title: "Javascript SDK",
    desc: "Developers interact with Butterfree through our Javascript SDK."
  };

  dataThree = {
    instanceID: "FeaturesBlurbTwo",
    image: "FeatureTwo.png",
    width: "80%",
    title: "Command Line Tools",
    desc:
      "Setting up the project, adding constraints, and creating a dashboard entry can be done within the terminal."
  };

  dataFour = {
    instanceID: "FeaturesBlurbThree",
    image: "FeatureThree.png",
    width: "80%",
    title: "Dashboard",
    desc:
      "A clean and elegant dashboard that you can share to your clients. Clients can add real content through this dashboard."
  };

  render() {
    return (
      <div className="FeaturesSection">
        <TextOne data={this.dataOne} />
        <BlurbTwo data={this.dataTwo} />
        <BlurbTwo data={this.dataThree} />
        <BlurbTwo data={this.dataFour} />
      </div>
    );
  }
}

export default FeaturesSection;
