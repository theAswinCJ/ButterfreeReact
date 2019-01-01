import React, { Component } from "react";
import "./LinkOne.css";

class LinkOne extends Component {
  render() {
    const { instanceID, linkone, linktwo } = this.props.data;

    return (
      <div className="LinkOne" id={instanceID}>
        <a>{linkone}</a>
        <a>{linktwo}</a>
      </div>
    );
  }
}

export default LinkOne;
