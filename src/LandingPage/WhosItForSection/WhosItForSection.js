import React, { Component } from "react";
import "./WhosItForSection.css";
import ImageTwo from "./Components/ImageTwo";
import BlurbFour from "./Components/BlurbFour";

class WhosItForSection extends Component {
  render() {
    return (
      <div className="WhosItForSection">
        <ImageTwo />
        <BlurbFour />
      </div>
    );
  }
}

export default WhosItForSection;
