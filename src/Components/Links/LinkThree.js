import React, { Component } from "react";
import "./LinkThree.css";

class LinkThree extends Component {
  render() {
    const {
      instanceID,
      title,
      linkone,
      linktwo,
      linkthree,
      linkfour,
      id
    } = this.props.data;

    return (
      <div className="LinkThree" id={instanceID}>
        <h2>{title}</h2>
        <a>{linkone}</a>
        <a>{linktwo}</a>
        <a>{linkthree}</a>
        <a>{linkfour}</a>
      </div>
    );
  }
}

export default LinkThree;
