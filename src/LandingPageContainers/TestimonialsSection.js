import React, { Component } from "react";
import "./TestimonialsSection.css";
import Testimonial from "./LocalContainers/Testimonial";

class TestimonialsSection extends Component {
  dataOne = {
    instanceID: "TestimonialOne",
    name: "MIA CROFT",
    company: "Lmntrx Tech",
    desc:
      "In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.",
    image: "FaceOne.png"
  };

  dataTwo = {
    instanceID: "TestimonialTwo",
    name: "2",
    company: "Designmodo",
    desc:
      "In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.",
    image: "FaceTwo.png"
  };

  dataThree = {
    instanceID: "TestimonialThree",
    name: "3",
    company: "Designmodo",
    desc:
      "In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.",
    image: "FaceThree.png"
  };

  dataFour = {
    instanceID: "TestimonialFour",
    name: "4",
    company: "Designmodo",
    desc:
      "In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.",
    image: "FaceFour.png"
  };

  dataFive = {
    instanceID: "TestimonialFive",
    name: "5",
    company: "Designmodo",
    desc:
      "In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.",
    image: "FaceFive.png"
  };

  dataSix = {
    instanceID: "TestimonialSix",
    name: "6",
    company: "Designmodo",
    desc:
      "In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.",
    image: "FaceSix.png"
  };

  render() {
    return (
      <div className="TestimonialsSection">
        <h2>What People Say</h2>
        <Testimonial data={this.dataOne} />
        <Testimonial data={this.dataTwo} />
        <Testimonial data={this.dataThree} />
        <Testimonial data={this.dataFour} />
        <Testimonial data={this.dataFive} />
        <Testimonial data={this.dataSix} />
      </div>
    );
  }
}

export default TestimonialsSection;
