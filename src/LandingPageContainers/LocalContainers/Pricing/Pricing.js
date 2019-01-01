import React, { Component } from "react";
import "./Pricing.css";
import Rate from "./Rate/Rate";
import ButtonOne from "../../../Components/Buttons/ButtonOne";

class Pricing extends Component {
  buttonOne = {
    instanceID: "PricingButton"
  };

  render() {
    const { instanceID, title, price, limitone, limittwo } = this.props.data;

    return (
      <div className="Pricing" id={instanceID}>
        <h2>{title}</h2>
        <Rate price={price} />
        <h3>{limitone}</h3>
        <h3>{limittwo}</h3>
        <ButtonOne data={this.buttonOne} />
      </div>
    );
  }
}

export default Pricing;
