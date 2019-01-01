import React, { Component } from "react";
import "./Testimonial.css";

class Testimonial extends Component {
  render() {
    const { instanceID, name, company, desc, image } = this.props.data;

    return (
      <div className="Testimonial" id={instanceID}>
        <img src={require("../../Assets/" + image)} />
        <h3>{name}</h3>
        <h4>{company}</h4>
        <p>{desc}</p>
      </div>
    );
  }
}

export default Testimonial;
