//LOCAL
import initialState from "../initialState";
import {PERSON_ADMIN} from "../actionsType/actionsTypeLogIn";
import {PERSON_MANAGER} from "../actionsType/actionsTypeLogIn";
import {PERSON_TEACHER} from "../actionsType/actionsTypeLogIn";
import {PERSON_USER} from "../actionsType/actionsTypeLogIn";

// !!!!!!! For Test local types!!
const defaultUser = {login: '', password: ''}
const users = [
  {login: 'manager', password: '123', type: PERSON_MANAGER},
  {login: 'admin', password: '123', type: PERSON_ADMIN},
  {login: 'teacher', password: '123', type: PERSON_TEACHER},
  {login: 'user', password: '123', type: PERSON_USER},
]

function whuIsWhu(user = defaultUser) {
  for (const item of users) {
    if (item.login === user.login.trim() && item.password === user.password.trim()) {
      return item.type
    }
  }
  return false
}

function logIn(data, type) {
  return {
    type: type,
    data: data
  }
}

export function logInState(user) {
  return function (dispatch) {
    if (whuIsWhu(user)){
      dispatch(
        logIn(
          initialState(whuIsWhu(user)),
          whuIsWhu(user)
        )
      )
    }else {
      console.log('user is not correct')
    }

  }
}

export default logInState