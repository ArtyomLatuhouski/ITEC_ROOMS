//OUTER
import React, {createRef} from "react";
import {Component} from "react";
import {connect} from "react-redux";


//LOCAL
import "./LogIn.scss";
import logInState from "../redux/actionCreators/logInAction";
import imgRobot from "./img/enter_img1.png"


const logInInitialState = {
  login: '',
  password: ''
}

class LogInComponent extends Component {

  constructor(props) {
    super(props);
    this.state = logInInitialState;
    this.logIn = this.logIn.bind(this)
    this.addDataToLocalState = this.addDataToLocalState.bind(this)
    this.textPreview = createRef()
  }

  componentDidMount() {

  }

  addDataToLocalState(event) {
    const name = event.target.name
    const data = event.target.value.trim()
    this.setState({[name]: data})
  }

  isValidation(data) {
    let valid = true
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] === '') {
          valid = false
        }
      }
    }
    return valid
  }

  logIn(e) {
    e.preventDefault()
    const data = this.state
    if (this.isValidation(data)) {
      this.props.logInState(data)
    } else {
      console.log('invalid')
    }
  }


  render() {
    if (1) {
      return (
        <div>
          <div className="wrapper">
            <div className="container__enter">
              <div className="enter__image">
                <img src={imgRobot} alt="" className="enter_img"/>
              </div>
              <h1 className="enter__title">
                Войти в личный кабинет
              </h1>
              <form action="#">
                <div className="enter-form__wrapper">
                  <input type="text" onChange={this.addDataToLocalState} name='login' placeholder="Введите логин"
                         className="enter__input" required/>
                  <input type="password" name='password' onChange={this.addDataToLocalState}
                         placeholder="Введите пароль" className="enter__input" required/>
                </div>
                <div className="enter-form__wrapper">
                  <label>
                    <input type="checkbox"/>
                    Запомнить меня
                  </label>
                  <input onClick={this.logIn} type="submit" name="button" value="Войти"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }
}


const mapDispatchToProps = {
  logInState
}


const LogIn = connect(null, mapDispatchToProps)(LogInComponent)

export default LogIn;
