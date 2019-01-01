import React, { Component } from "react";
import "./FooterColumn.css";

class FooterColumn extends Component {
  render() {
    const { instanceID, title, aone, atwo, athree, afour } = this.props.data;

    return (
      <div className="FooterColumn" id={instanceID}>
        <h2>{title}</h2>
        <a>{aone}</a>
        <a>{atwo}</a>
        <a>{athree}</a>
        <a>{afour}</a>
      </div>
    );
  }
}

export default FooterColumn;
