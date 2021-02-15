//OUTER
import React from "react";
import { Component } from "react";

//LOCAL
import HeaderInfo from "./studentComponents/HeaderInfo/HeaderInfo";
import StudentMenu from "./studentComponents/Menu/StudentMenu";
import "./PageStudent.css"
import { Route, Switch } from 'react-router'
import StudentCalendar from "./studentComponents/StudentCalendar/StudentCalendar";
import StudyingProccess from "./studentComponents/StudyingProccess/StudyingProccess";
import Planning from "./studentComponents/Planning/Planning";
import Chat from "./studentComponents/Chat/Chat";
import StudentProfile from "./studentComponents/StudentProfile/StudentProfile";
import SchoolServices from "./studentComponents/SchoolServices/SchoolServices";
import StudentNews from "./studentComponents/StudentNews/StudentNews";
import HomePage from "./studentComponents/HomePage/HomePage";
import CalendarDay from "./studentComponents/StudentCalendar/calendarComponents/CalendarDay/CalendarDay";


class PageStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {

    console.log(this.props);

    return (
      <div id="student-app__container">
        <div className="student-body_container">
          <StudentMenu/>
        </div>
        <div className="student-header_container">
          <HeaderInfo/>
          <div className="components__container">
            <Switch>
              <Route path='/' exact render={() => <HomePage/>}/>
              <Route path='/studcalendar/:day' component={CalendarDay} />
              <Route path='/studcalendar' component={StudentCalendar} />
              <Route path='/studprocess' component={StudyingProccess} />
              <Route path='/planning' component={Planning} />
              <Route path='/somechat' component={Chat} />
              <Route path='/services' component={SchoolServices} />
              <Route path='/news' component={StudentNews} />
              <Route path='/chat' component={Chat} />
              <Route path='/profile' component={StudentProfile} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default PageStudent;
