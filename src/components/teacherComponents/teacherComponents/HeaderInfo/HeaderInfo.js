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
      <div className='header_info_teacher'>
        hello Teacher!!!
      </div>
    );
  }
}

export default HeaderInfo;
