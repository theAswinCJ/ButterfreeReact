import React, { Component } from "react";
import "./BlurbThirteen.css";
import img from "../Assets/ione.png";

class BlurbThirteen extends Component {
  render() {
    return (
      <div className="BlurbThirteen">
        <img src={img} width="80%" />
        <h2>Javascript SDK</h2>
        <p>Developers interact with Butterfree through our Javascript SDK.</p>
      </div>
    );
  }
}

export default BlurbThirteen;
