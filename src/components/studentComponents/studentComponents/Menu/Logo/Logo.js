import React from "react";
import { Component } from "react";
import "./Logo.css";
import {NavLink} from "react-router-dom";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {

    return (
      <div className="logo__wrapper">
        <NavLink exact to='/' className="logo-noactive">ITEC Education complex</NavLink>
      </div>
    );
  }
}

export default Logo;