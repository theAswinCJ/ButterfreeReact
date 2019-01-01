import React, { Component } from "react";
import "./PricingSection.css";
import Pricing from "./LocalContainers/Pricing/Pricing";
import BlurbOne from "../Components/Blurbs/BlurbOne";
import BlurbThree from "../Components/Blurbs/BlurbThree";
import ButtonTwo from "../Components/Buttons/ButtonTwo";

class PricingSection extends Component {
  dataOne = {
    instanceID: "PricingTitle",
    title: "Pricing",
    desc: "Check out our pricing plans for the most suitable one for you."
  };

  dataTwo = {
    instanceID: "SwitchPricing",
    width: "300px"
  };

  dataThree = {
    instanceID: "PricingOne",
    title: "Freelancer",
    price: "90",
    limitone: "2 Websites per month",
    limittwo: "500 MB Files per month"
  };

  dataFour = {
    instanceID: "PricingTwo",
    title: "Agency",
    price: "180",
    limitone: "10 Websites per month",
    limittwo: "2 GB Files per month"
  };

  dataFive = {
    instanceID: "PricingThree",
    title: "Enterprise",
    price: "270",
    limitone: "Unlimited Websites per month",
    limittwo: "10 GB Files per month"
  };

  dataSix = {
    instanceID: "PricingDescriptions",
    tagone: "Manage specified number of websites simultaneously",
    tagtwo:
      "Size limit applies on the files uploaded by your clients that we store for you",
    tagthree:
      "Super Build is an even simpler method of real time content collection"
  };

  render() {
    return (
      <div className="PricingSection">
        <BlurbOne data={this.dataOne} />
        <ButtonTwo data={this.dataTwo} />
        <Pricing data={this.dataThree} />
        <Pricing data={this.dataFour} />
        <Pricing data={this.dataFive} />
        <BlurbThree data={this.dataSix} />
      </div>
    );
  }
}

export default PricingSection;
