import React, { Component } from "react";
import "./TechnicalProofSection.css";
import BlurbOne from "../Components/Blurbs/BlurbOne";

class TechnicalProofSection extends Component {
  dataOne = {
    instanceID: "TechProofBlurb",
    title: "This page is built with Butterfree!",
    desc:
      "      We put our code where our mouth is. All texts and images in this page are added using Butterfree. First we deployed the page with a layout for dummy content, set the project with some contraints and added all content later. This is what you can do as well. We know how troublesome editing content is in any website. And the worst part is you waste your time on waiting for someone else to give you texts and images. No more of that!"
  };

  render() {
    return (
      <div className="TechnicalProofSection">
        <BlurbOne data={this.dataOne} />
      </div>
    );
  }
}

export default TechnicalProofSection;
