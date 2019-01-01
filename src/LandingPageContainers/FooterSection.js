import React, { Component } from "react";
import "./FooterSection.css";
import FooterColumn from "./LocalContainers/Footer/FooterColumn";
import TextTwo from "../Components/Texts/TextTwo";
import FooterTail from "./LocalContainers/Footer/FooterTail";
import FooterSocial from "./LocalContainers/Footer/FooterSocial";

class FooterSection extends Component {
  dataOne = {
    instanceID: "FooterColumnOne",
    title: "Product",
    aone: "Mobile Design",
    atwo: "Web Design",
    athree: "App Development",
    afour: "UI/UX"
  };

  dataTwo = {
    instanceID: "FooterColumnTwo",
    title: "About",
    aone: "Company",
    atwo: "Team",
    athree: "Clients",
    afour: "Career",
    id: "two"
  };

  dataThree = {
    instanceID: "FooterColumnThree",
    title: "Legal",
    aone: "License",
    atwo: "Privacy Policy",
    athree: "Terms and Conditions",
    afour: "",
    id: "three"
  };

  dataFour = {
    instanceID: "FooterColumnFour",
    title: "Contacts",
    aone: "Write Us",
    atwo: "Map",
    athree: "",
    afour: "",
    id: "four"
  };

  dataFive = {
    title: "Follow Us",
    id: "five"
  };

  dataSix = {
    instanceID: "FooterPara",
    para:
      "In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here."
  };

  dataSeven = {
    aone: "Terms & Conditions",
    atwo: "Privacy Policy",
    id: "seven"
  };

  render() {
    return (
      <div className="FooterSection">
        <FooterColumn data={this.dataOne} />
        <FooterColumn data={this.dataTwo} />
        <FooterColumn data={this.dataThree} />
        <FooterColumn data={this.dataFour} />
        <FooterSocial data={this.dataFive} />
        <TextTwo data={this.dataSix} />
        <FooterTail data={this.dataSeven} />
      </div>
    );
  }
}

export default FooterSection;
