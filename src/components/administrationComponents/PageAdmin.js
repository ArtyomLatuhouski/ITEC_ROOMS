//OUTER
import React from "react";
import {Component} from "react";
import Menu from "../managerComponents/managerComponents/Menu/Menu";
import HeaderInfo from "../managerComponents/managerComponents/HeaderInfo/HeaderInfo";
import {Route, Switch} from "react-router";
import Groups from "../managerComponents/managerComponents/routeComponents/Groups/Groups";
import Timetable from "../managerComponents/managerComponents/routeComponents/Timetable/Timetable";
import Chat from "../managerComponents/managerComponents/routeComponents/Chat/Chat";
import Teachers from "../managerComponents/managerComponents/routeComponents/Teaches/Teachers";
import Lids from "../managerComponents/managerComponents/routeComponents/Lids/Lids";
import Contacts from "../managerComponents/managerComponents/routeComponents/Contracts/Contacts";
import News from "../managerComponents/managerComponents/routeComponents/News/News";
import Userdata from "../managerComponents/managerComponents/routeComponents/Userdata/Userdata";
import Orders from "../managerComponents/managerComponents/routeComponents/Orders/Orders";
import StartPage from "../managerComponents/managerComponents/routeComponents/StartPage/StartPage";


//LOCAL


class PageAdmin extends Component {
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

export default PageAdmin;
