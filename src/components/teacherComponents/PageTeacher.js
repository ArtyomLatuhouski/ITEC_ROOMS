//OUTER
import React from "react";
import {Component} from "react";
import {Route, Switch} from "react-router";

//LOCAL
import "./PageTeacher.css";
import Menu from "./teacherComponents/Menu/Menu";
import HeaderInfo from "./teacherComponents/HeaderInfo/HeaderInfo";
import AcademicCalendar from "./teacherComponents/teachersPage/AcademicCalendar/AcademicCalendar";
import EducationProcess from "./teacherComponents/teachersPage/EducationProcess/EducationProcess";
import Chat from "./teacherComponents/teachersPage/Chat/Chat";
import AdministratorConnection from "./teacherComponents/teachersPage/AdministratorConnection/AdministratorConnection";
import Teachers from "./teacherComponents/teachersPage/Teachers/Teachers";
import SchoolNews from "./teacherComponents/teachersPage/SchoolNews/SchoolNews";
import MyServices from "./teacherComponents/teachersPage/MyServices/MyServices";
import Profile from "./teacherComponents/teachersPage/Profile/Profile";

class PageTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id='teacher-app__container'>
        <div className="teacher-body_container">
          <Menu/>
        </div>
        <div className="teacher-header_container">
          <HeaderInfo/>
          <div className="components__container_teacher">
            {/*<Switch>*/}
            <Route path='/1' render={() => <AcademicCalendar/>}/>
            <Route path='/2' render={() => <EducationProcess/>}/>
            <Route path='/3' render={() => <Chat/>}/>
            <Route path='/4' render={() => <AdministratorConnection/>}/>
            <Route path='/5' render={() => <Teachers/>}/>
            <Route path='/6' render={({match, location}) => <SchoolNews match={match} location={location}/>}/>
            <Route path='/7' render={() => <MyServices/>}/>
            <Route path='/8' render={() => <Profile/>}/>
            <Route exact path='/' render={() => <p>Main Page</p>}/>

            {/*</Switch>*/}
          </div>
        </div>
      </div>
    )
      ;
  }
}

export default PageTeacher;
