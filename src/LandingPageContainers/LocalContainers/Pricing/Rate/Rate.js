import React, { Component } from "react";
import "./Rate.css";

class Rate extends Component {
  render() {
    const { price } = this.props;

    return (
      <div className="Rate">
        <h3>$</h3>
        <h4>{price}</h4>
        <h5>per month</h5>
      </div>
    );
  }
}

export default Rate;
