//INNER
import React from "react";
import { Component } from "react";
import "./StudentMenu.css";


//LOCAL
import MenuItem from "./MenuItem/MenuItem";
import Logo from "./Logo/Logo";


class StudentMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  
  render() {
    
    return (
      <div >
        <div className="studentMenu__container">
            <Logo />
            <MenuItem data={{name: 'Учебный календарь', path:'/studcalendar'}}/>
            <MenuItem data={{name: 'Учебный процесс', path:'/studprocess'}}/>
            <MenuItem data={{name: 'Планировщик', path:'/planning'}}/>
            <MenuItem data={{name: 'Связь с куратором', path:'/somechat'}}/>
            <MenuItem data={{name: 'Услуги', path:'/services'}}/>
            <MenuItem data={{name: 'Новости школы', path:'/news'}}/>
            <MenuItem data={{name: 'Чат', path:'/chat'}}/>
            <MenuItem data={{name: 'Профиль', path:'/profile'}}/>
            <MenuItem data={{name: 'Выход', path:'/exit'}}/>
        </div>
      </div>
    );
  }
}

export default StudentMenu;
