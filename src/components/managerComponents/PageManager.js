//OUTER
import React from "react";
import {Component} from "react";
import {Route, Switch} from "react-router";

//LOCAL
import HeaderInfo from "./managerComponents/HeaderInfo/HeaderInfo";
import Menu from "./managerComponents/Menu/Menu";
import "./PageManager.css"
import Chat from "./managerComponents/routeComponents/Chat/Chat";
import Contacts from "./managerComponents/routeComponents/Contracts/Contacts";
import Groups from "./managerComponents/routeComponents/Groups/Groups";
import Lids from "./managerComponents/routeComponents/Lids/Lids";
import News from "./managerComponents/routeComponents/News/News";
import Orders from "./managerComponents/routeComponents/Orders/Orders";
import StartPage from "./managerComponents/routeComponents/StartPage/StartPage";
import Teachers from "./managerComponents/routeComponents/Teaches/Teachers";
import Timetable from "./managerComponents/routeComponents/Timetable/Timetable";
import Userdata from "./managerComponents/routeComponents/Userdata/Userdata";


class PageManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="manager-app__container">
        <div className="manager-body_container">
          <Menu/>
        </div>
        <div className="manager-header_container">
          <HeaderInfo/>
          <div className="components__container">
            <Switch>
              <Route path='/groups' render={() => <Groups/>}/>
              <Route path='/timetable' render={() => <Timetable/>}/>
              <Route path='/chat' render={() => <Chat/>}/>
              <Route path='/teaches' render={() => <Teachers/>}/>
              <Route path='/lids' render={() => <Lids/>}/>
              <Route path='/contracts' render={() => <Contacts/>}/>
              <Route path='/news' render={() => <News/>}/>
              <Route path='/userdata' render={() => <Userdata/>}/>
              <Route path='/orders' render={() => <Orders/>}/>
              <Route exact path='/' render={() => <StartPage/>}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default PageManager;
