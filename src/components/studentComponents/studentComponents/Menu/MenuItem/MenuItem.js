import React from "react";
import { Component } from "react";
import "./MenuItem.css";
import {NavLink} from "react-router-dom";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {

    return (
      <div className="student-item-menu__link-block">
        <NavLink exact to={this.props.data.path}
                 activeClassName="student-item-menu__link-active"
                 className="student-item-menu__link"> {this.props.data.name} </NavLink>
      </div>
    );
  }
}

export default MenuItem;
