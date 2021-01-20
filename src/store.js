import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import companyReducer from './reducers/companyReducer'
import signupForm from './reducers/signupForm'
import ordersReducer from './reducers/ordersReducer'
import thunk from 'redux-thunk'

// just displaying different syntax options here (lines 8 and 9)
const reducer = combineReducers({
  companyReducer,
  currentUser,
  loginForm,
  signupForm,
  ordersReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store