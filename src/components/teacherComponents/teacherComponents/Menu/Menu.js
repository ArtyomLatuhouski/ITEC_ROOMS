//INNER
import React from "react";
import { Component } from "react";
import "./Menu.scss";


//LOCAL
import MenuItem from "./MenuItem/MenuItem";


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div >
        <div className="container__menu">
            <div className="menu__logo">
              <span>ITEC</span> Education complex
            </div>
          <MenuItem data={{name: 'Учебный календарь',path:'/academic_calendar'}}/>
          <MenuItem data={{name: 'Учебный процесс',path:'/educational_process'}}/>
          <MenuItem data={{name: 'Чат',path:'/chat'}}/>
          <MenuItem data={{name: 'Связь с администратором',path:'/administrator_connection'}}/>
          <MenuItem data={{name: 'Преподаватели',path:'/teachers'}}/>
          <MenuItem data={{name: 'Новости школы',path:'/school_news'}}/>
          <MenuItem data={{name: 'Мои услуги',path:'/my_services'}}/>
          <MenuItem data={{name: 'Профиль',path:'/profile'}}/>
          <MenuItem data={{name: 'Выход',path:'/'}}/>
        </div>
      </div>
    );
  }
}

export default Menu;
