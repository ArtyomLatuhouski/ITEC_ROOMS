//OUTER
import { combineReducers } from 'redux'


//LOCAL
import logInReducer from "./logInReducer";


const rootReducer=combineReducers({
  userData:logInReducer
})

export default rootReducer
