import React from "react";
import { Component } from "react";
import "./HeaderInfo.css";

class HeaderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className='student__header'>
        <p className='student__title'>Hello bastard!</p>
        <div className='student__face'>O_o</div>
      </div>
    );
  }
}

export default HeaderInfo;
