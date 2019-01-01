import React, { Component } from "react";
import "./BlurbOne.css";

class BlurbOne extends Component {
  render() {
    const { instanceID, title, desc } = this.props.data;

    return (
      <div className="BlurbOne" id={instanceID}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    );
  }
}

export default BlurbOne;
