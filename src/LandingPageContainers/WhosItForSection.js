import React, { Component } from "react";
import "./WhosItForSection.css";
import ImageOne from "../Components/Images/ImageOne";
import BlurbFour from "../Components/Blurbs/BlurbFour";

class WhosItForSection extends Component {
  dataOne = {
    instanceID: "iPadImage",
    image: "iPad.png",
    width: "100%"
  };

  dataTwo = {
    instanceID: "WhosItForBlurb",
    title: "Who’s it for?",
    desc:
      " Butterfree can be used by any web developer irrespective of the nature of your business. The system we built has to be implemented in your website by your developer. Dont worry, we have made it extremely simple!",
    subheading: "It's used by",
    listone: "Freelancers",
    listtwo: "Digital Agencies",
    listthree: "And all other Web Developers"
  };

  render() {
    return (
      <div className="WhosItForSection">
        <ImageOne data={this.dataOne} />
        <BlurbFour data={this.dataTwo} />
      </div>
    );
  }
}

export default WhosItForSection;
