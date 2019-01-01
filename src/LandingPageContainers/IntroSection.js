import React, { Component } from "react";
import "./IntroSection.css";
import BlurbOne from "../Components/Blurbs/BlurbOne";
import ImageOne from "../Components/Images/ImageOne";
import ButtonOne from "../Components/Buttons/ButtonOne";
import LinkTwo from "../Components/Links/LinkTwo";
import TextOne from "../Components/Texts/TextOne";

class IntroSection extends Component {
  dataOne = {
    instanceID: "IntroBlurbOne",
    title: "Automate the entire process",
    desc:
      "What if we tell you there is a way to automatically collect content and update them to your website in production with zero effort?"
  };

  dataTwo = {
    instanceID: "IntroBlurbTwo",
    title: "Separate development and content",
    desc:
      "Focus on development without having to worry about what content it must have and then later on let your clients do the hard work for you."
  };

  dataThree = {
    instanceID: "IntroBlurbThree",
    title: "Live Updation of New Content",
    desc:
      "Once you have bulit your website, you can then ask your clients or copy writers to fill it up with content and it magically appears on the website."
  };

  MacbookImage = {
    instanceID: "MacbookPro",
    image: "MBP.png",
    width: "100%"
  };

  SiteLogo = {
    instanceID: "SiteLogo",
    image: "Logo.svg",
    width: "30px"
  };

  HeaderLinks = {
    instanceID: "Header",
    linkone: "WHO'S IT FOR",
    linktwo: "HOW IT WORKS",
    linkthree: "PRICING",
    linkfour: "LOGIN"
  };

  textOne = {
    instanceID: "IntroHeader",
    title: "Never worry about content during website development"
  };

  buttonOne = {
    instanceID: "IntroSignUp"
  };

  render() {
    return (
      <div className="IntroSection">
        <ImageOne data={this.SiteLogo} />
        <ButtonOne data={this.buttonOne} />
        <LinkTwo data={this.HeaderLinks} />
        <TextOne data={this.textOne} />
        <ImageOne data={this.MacbookImage} />
        <BlurbOne data={this.dataOne} />
        <BlurbOne data={this.dataTwo} />
        <BlurbOne data={this.dataThree} />
      </div>
    );
  }
}

export default IntroSection;
