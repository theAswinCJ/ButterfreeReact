import React, { Component } from "react";
import "./FooterSocial.css";

class FooterSocial extends Component {
  render() {
    const { title } = this.props.data;

    return (
      <div className="FooterSocial">
        <h2>{title}</h2>
        <img src={require("../../../Assets/facebook.svg")} width="12%" />
        <img src={require("../../../Assets/twitter.svg")} width="12%" />
        <img src={require("../../../Assets/tumbler.svg")} width="12%" />
        <img src={require("../../../Assets/vimeo.svg")} width="12%" />
      </div>
    );
  }
}

export default FooterSocial;
