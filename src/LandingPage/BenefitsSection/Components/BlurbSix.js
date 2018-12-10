import React, { Component } from "react";
import "./BlurbSix.css";
import IconOne from "../Assets/IconOne.svg";

class BlurbSix extends Component {
  render() {
    return (
      <div className="BlurbSix">
        <img src={IconOne} width="30%" />
        <h2>Deploy without content</h2>
        <p>
          From now on, you can publish your website with dummy content and ask
          someone else to update it for you.
        </p>
      </div>
    );
  }
}

export default BlurbSix;
