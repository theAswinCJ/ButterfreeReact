import React, { Component } from "react";
import "./BenefitsSection.css";
import BlurbOne from "../Components/Blurbs/BlurbOne";
import BlurbTwo from "../Components/Blurbs/BlurbTwo";

class BenefitsSection extends Component {
  dataOne = {
    instanceID: "BenefitsBlurbTitle",
    title: "Change your perception about content",
    desc:
      "We know how troublesome editing content is in any website. And the worst part is you waste your time on waiting for someone else to give you texts and images. No more of that!"
  };

  dataTwo = {
    instanceID: "BenefitsBlurbOne",
    image: "BenefitsOne.svg",
    width: "30%",
    title: "Deploy without content",
    desc:
      "From now on, you can publish your website with dummy content and ask someone else to update it for you."
  };

  dataThree = {
    instanceID: "BenefitsBlurbTwo",
    image: "BenefitsTwo.svg",
    width: "30%",
    title: "Get Paid Early",
    desc:
      "Freelancers and agencies can clear their bills right after development without worrying about client delays"
  };

  dataFour = {
    instanceID: "BenefitsBlurbThree",
    image: "BenefitsThree.svg",
    width: "30%",
    title: "Save a bunch of time",
    desc:
      "Take full control of your time and get the peace of mind to accept more clients than usual."
  };

  render() {
    return (
      <div className="BenefitsSection">
        <BlurbOne data={this.dataOne} />
        <BlurbTwo data={this.dataTwo} />
        <BlurbTwo data={this.dataThree} />
        <BlurbTwo data={this.dataFour} />
      </div>
    );
  }
}

export default BenefitsSection;
