import React, { Component } from "react";
import "./BlurbFifteen.css";
import img from "../Assets/ithree.png";

class BlurbFifteen extends Component {
  render() {
    return (
      <div className="BlurbFifteen">
        <img src={img} width="80%" />
        <h2>Dashboard</h2>
        <p>
          A clean and elegant dashboard that you can share to your clients.
          Clients can add real content through this dashboard.
        </p>
      </div>
    );
  }
}

export default BlurbFifteen;
