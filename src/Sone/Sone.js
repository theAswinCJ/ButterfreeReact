import React, { Component } from "react";
import "./Sone.css";
import SoneHeader from "./SoneHeader";

class Sone extends Component {
  render() {
    return (
      <div className="Sone">
        <SoneHeader />
      </div>
    );
  }
}

export default Sone;
