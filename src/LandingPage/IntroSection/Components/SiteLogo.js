import React, { Component } from "react";
import "./SiteLogo.css";
import SiteLogoFile from "../Assets/SiteLogo.svg";

class SiteLogo extends Component {
  render() {
    return (
      <div className="SiteLogo">
        <img src={SiteLogoFile} width="30px" />
      </div>
    );
  }
}

export default SiteLogo;
