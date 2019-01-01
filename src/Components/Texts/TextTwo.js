import React, { Component } from "react";
import "./TextTwo.css";

class TextTwo extends Component {
  render() {
    const { instanceID, para } = this.props.data;

    return (
      <div className="TextTwo" id={instanceID}>
        <p>{para}</p>
      </div>
    );
  }
}

export default TextTwo;
