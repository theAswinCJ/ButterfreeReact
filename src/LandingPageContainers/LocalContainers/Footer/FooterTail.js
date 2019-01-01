import React, { Component } from "react";
import "./FooterTail.css";

class FooterTail extends Component {
  render() {
    const { aone, atwo } = this.props.data;

    return (
      <div className="FooterTail">
        <a>{aone}</a>
        <a>{atwo}</a>
      </div>
    );
  }
}

export default FooterTail;
