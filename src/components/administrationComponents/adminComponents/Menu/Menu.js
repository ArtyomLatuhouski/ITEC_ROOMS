//INNER
import React from "react";
import {Component} from "react";
import "./Menu.scss";


//LOCAL
import MenuItem from "./MenuItem/MenuItem";
import {connect} from "react-redux";
import outToLogIn from "../../../../redux/actionCreators/outToLogIn";


class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="container__menu">
          <div className="menu__logo">
            <MenuItem data={{name: 'ITEC Education complex', path: '/', noActive: true}}/>
          </div>
          <MenuItem data={{name: 'Группы', path: '/groups'}}/>
          <MenuItem data={{name: 'Рассписание', path: '/timetable'}}/>
          <MenuItem data={{name: 'Чат', path: '/chat'}}/>
          <MenuItem data={{name: 'Преподаватели', path: '/teaches'}}/>
          <MenuItem data={{name: 'Лиды', path: '/lids'}}/>
          <MenuItem data={{name: 'Контракты', path: '/contracts'}}/>
          <MenuItem data={{name: 'Новости школы', path: '/news'}}/>
          <MenuItem data={{name: 'Личные данные', path: '/userdata'}}/>
          <MenuItem data={{name: 'Заказы', path: '/orders'}}/>
          <div className="menu__logo">
            <MenuItem data={{name: 'Выход', path: '/', outer: true, outLogIn: this.props.outToLogIn}}/>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = {
  outToLogIn
}

const Menu = connect(null, mapDispatchToProps)(MenuComponent)

export default Menu;
