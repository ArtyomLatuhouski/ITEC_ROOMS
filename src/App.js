//OUTER
import {connect} from "react-redux";
import React from 'react'


//LOCAL
import LogIn from "./logIn/LogIn";
import './App.css';
import {PERSON_ADMIN, PERSON_MANAGER, PERSON_TEACHER, PERSON_USER} from "./redux/actionsType/actionsTypeLogIn";
import PageAdmin from "./components/administrationComponents/PageAdmin.js";
import PageManager from "./components/managerComponents/PageManager";
import PageStudent from "./components/studentComponents/PageStudent";
import PageTeacher from "./components/teacherComponents/PageTeacher";


function AppComponent (props) {
  if (props.state.user===undefined){
    return <LogIn/>
  }
  switch (props.state.access) {
    case PERSON_ADMIN:
      return <PageAdmin/>
    case PERSON_MANAGER:
      return <PageManager/>
    case PERSON_TEACHER:
      return <PageTeacher/>
    case PERSON_USER:
      return <PageStudent/>
    default:
      return (<p> hello undefined world </p>)
  }
}

//redux
const  mapStateToProp=state=>{
  return{
    state:state.userData
  }
}
const App=connect(mapStateToProp,null)(AppComponent)


//export connect to store component
export default App;
