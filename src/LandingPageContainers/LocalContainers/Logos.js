import React, { Component } from "react";
import "./Logos.css";
import Behance from "../../Assets/Behance.png";
import Designmodo from "../../Assets/Designmodo.png";
import Envato from "../../Assets/Envato.png";
import Github from "../../Assets/Github.png";
import Google from "../../Assets/Google.png";

class Logos extends Component {
  render() {
    return (
      <div className="Logos">
        <img src={Behance} />
        <img src={Designmodo} />
        <img src={Envato} />
        <img src={Github} />
        <img src={Google} />
      </div>
    );
  }
}

export default Logos;
