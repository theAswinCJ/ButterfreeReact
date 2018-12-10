import React, { Component } from "react";
import "./SignUp.css";
import input from "../Assets/Input.png";

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <img src={input} width="100%" />
      </div>
    );
  }
}

export default SignUp;
