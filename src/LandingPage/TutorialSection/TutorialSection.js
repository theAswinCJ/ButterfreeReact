import React, { Component } from "react";
import "./TutorialSection.css";
import BlurbNine from "./Components/BlurbNine";
import BlurbTen from "./Components/BlurbTen";
import BlurbEleven from "./Components/BlurbEleven";
import BlurbTwelve from "./Components/BlurbTwelve";
import VideoOne from "./Components/VideoOne";
import Line from "./Components/Line";

class TutorialSection extends Component {
  render() {
    return (
      <div className="TutorialSection">
        <BlurbNine />
        <VideoOne />
        <Line />
        <BlurbTen />
        <BlurbEleven />
        <BlurbTwelve />
      </div>
    );
  }
}

export default TutorialSection;
