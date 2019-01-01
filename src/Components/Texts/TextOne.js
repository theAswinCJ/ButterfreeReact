import React, { Component } from "react";
import "./TextOne.css";

class TextOne extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="TextOne" id={instanceID}>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default TextOne;
