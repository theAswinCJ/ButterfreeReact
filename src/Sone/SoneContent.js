import React, { Component } from "react";
import "./SoneContent.css";
import MBP from "./MBP.png";

class SoneContent extends Component {
  render() {
    return (
      <div className="SoneContent">
        <h1 className="Title">
          Never worry about content during website development
        </h1>
        <img className="Image" src={MBP} width="100%" />
        <div className=" BlurpOne">
          <h2>Automate the entire process</h2>
          <p>
            What if we tell you there is a way to automatically collect content
            and update them to your website in production with zero effort?{" "}
          </p>
        </div>
        <div className="BlurpTwo">
          <h2>Separate development and content</h2>
          <p>
            Focus on development without having to worry about what content it
            must have and then later on let your clients do the hard work for
            you.
          </p>
        </div>
        <div className=" BlurpThree">
          <h2>Live Updation of New Content</h2>
          <p>
            Once you have bulit your website, you can then ask your clients or
            copy writers to fill it up with content and it magically appears on
            the website.
          </p>
        </div>
      </div>
    );
  }
}

export default SoneContent;
