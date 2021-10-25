import { combineReducers, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import blogsReducer from './reducers/blogsReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
    notification: notificationReducer,
    blogs: blogsReducer,
    login: loginReducer
})
const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ))
export default store