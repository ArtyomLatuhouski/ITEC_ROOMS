//LOCAL
import {OUT_TO_LIGIN, PERSON_ADMIN, PERSON_MANAGER, PERSON_TEACHER, PERSON_USER} from "../actionsType/actionsTypeLogIn";

const logInReducer = (state={}, action) => {
  switch (action.type) {
    case PERSON_ADMIN:
      return action.data
    case PERSON_MANAGER:
      return action.data
    case PERSON_TEACHER:
      return action.data
    case PERSON_USER:
      return action.data
    case OUT_TO_LIGIN:
      return {}
    default:
      return state
  }
}

export default logInReducer