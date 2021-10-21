import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { notificationReducer } from './reducers/notificationReducer'

const store = createStore(notificationReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ))
export default store