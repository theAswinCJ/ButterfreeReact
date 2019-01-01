import React, { Component } from "react";
import "./BlurbFour.css";

class BlurbFour extends Component {
  render() {
    const {
      instanceID,
      title,
      desc,
      subheading,
      listone,
      listtwo,
      listthree
    } = this.props.data;

    return (
      <div className="BlurbFour" id={instanceID}>
        <h2>{title}</h2>
        <p> {desc}</p>
        <p>{subheading}</p>
        <ul>
          <li>{listone}</li>
          <li>{listtwo}</li>
          <li>{listthree}</li>
        </ul>
      </div>
    );
  }
}

export default BlurbFour;
