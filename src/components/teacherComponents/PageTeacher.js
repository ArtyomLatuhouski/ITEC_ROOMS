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
            <Route path='/academic_calendar' render={() => <AcademicCalendar/>}/>
            <Route path='/educational_process' render={() => <EducationProcess/>}/>
            <Route path='/chat' render={() => <Chat/>}/>
            <Route path='/administrator_connection' render={() => <AdministratorConnection/>}/>
            <Route path='/teachers' render={() => <Teachers/>}/>
            <Route path='/school_news' render={({match, location}) => <SchoolNews match={match} location={location}/>}/>
            <Route path='/my_services' render={() => <MyServices/>}/>
            <Route path='/profile' render={() => <Profile/>}/>
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
