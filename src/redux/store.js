//OUTER
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware  } from 'redux'


//LOCAL
import rootReducer from "./reducers/rootReducer";



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store