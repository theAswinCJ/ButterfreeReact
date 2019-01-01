import React, { Component } from "react";
import "./LinkTwo.css";

class LinkTwo extends Component {
  render() {
    const {
      instanceID,
      linkone,
      linktwo,
      linkthree,
      linkfour
    } = this.props.data;

    return (
      <div className="LinkTwo" id={instanceID}>
        <a>{linkone}</a>
        <a>{linktwo}</a>
        <a>{linkthree}</a>
        <a>{linkfour}</a>
      </div>
    );
  }
}

export default LinkTwo;
