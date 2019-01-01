import React, { Component } from "react";
import "./TutorialSection.css";
import BlurbOne from "../Components/Blurbs/BlurbOne";
import VideoOne from "../Components/Videos/Video";
import Line from "../Components/Lines/Line";

class TutorialSection extends Component {
  dataOne = {
    instanceID: "TutorialTitle",
    title: "Watch how it all works",
    desc:
      " We've made a video explaining how it all comes together to bring you a seamless experience. The setting up process is made very developer friendly with access to our command line tools. You do not have to go outside the terminal to set everything up!"
  };

  dataTwo = {
    instanceID: "TutorialVideo",
    width: "70%"
  };

  dataThree = {
    instanceID: "TutorialLine"
  };

  dataFour = {
    instanceID: "TutorialBlurbOne",
    title: "1. Integrate our SDK",
    desc:
      "While building your website, integrate our SDK and follow the documentation on how to set up a layout with dummy content."
  };

  dataFive = {
    instanceID: "TutorialBlurbTwo",
    title: "2. Add Constraints",
    desc:
      " Next step is to add constraints to texts and images so that the client wont go overboard with what they provide. You have full control over the constraints."
  };

  dataSix = {
    instanceID: "TutorialBlurbThree",
    title: "3. Deploy and Watch",
    desc:
      "Publish the website with our command line tool and get a link to the dashboard. Share this link to your client/copy writer and watch as the magic happens."
  };

  render() {
    return (
      <div className="TutorialSection">
        <BlurbOne data={this.dataOne} />
        <VideoOne data={this.dataTwo} />
        <Line data={this.dataThree} />
        <BlurbOne data={this.dataFour} />
        <BlurbOne data={this.dataFive} />
        <BlurbOne data={this.dataSix} />
      </div>
    );
  }
}

export default TutorialSection;
