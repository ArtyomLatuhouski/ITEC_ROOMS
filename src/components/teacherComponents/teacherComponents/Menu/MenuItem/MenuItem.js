import React from "react";
import {Component} from "react";
import "./MenuItem.css";
import {NavLink} from "react-router-dom";
import logInReducer from "../../../../../redux/reducers/logInReducer";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    if (this.props.data.path === '/') {
      return (
        <div className="item-menu__link-block">
          <NavLink exact to={this.props.data.path}
                   activeClassName="item-menu__link-active"
                   className="item-menu__link"> {this.props.data.name} </NavLink>
        </div>
      )
    } else {
      return (
        <div className="item-menu__link-block">
          <NavLink to={this.props.data.path}
                   activeClassName="item-menu__link-active"
                   className="item-menu__link"> {this.props.data.name} </NavLink>
        </div>
      );
    }
  }
}

export default MenuItem;
