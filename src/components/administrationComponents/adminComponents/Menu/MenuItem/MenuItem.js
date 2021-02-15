//OUTER
import {NavLink} from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom"



//LOCAL
import "./MenuItem.css";




function MenuItem (props) {
  const history=useHistory()
    if (props.data.noActive) {
      return (
        <NavLink to={props.data.path}
                 className="item-menu__link-noActive">
          {props.data.name}
        </NavLink>
      );
    } else if (props.data.outer) {
      return (
        <div className="item-menu__link-noActive">
          <div onClick={()=> {
            history.replace("/",null)
            props.data.outLogIn()
          }}
               className="item-menu__link">
            {props.data.name}
          </div>
        </div>
      )
    } else {
      return (
        <div className="item-menu__link-block">
          <NavLink to={props.data.path}
                   activeClassName="item-menu__link-active"
                   className="item-menu__link">
            {props.data.name}
          </NavLink>
        </div>
      );
    }

}

export default MenuItem;
