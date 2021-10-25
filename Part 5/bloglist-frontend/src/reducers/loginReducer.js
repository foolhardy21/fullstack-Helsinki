import { getLoginToken } from "../services/blogs"

const initialUser = ''

export const getUser = (username, password) => {
    return async dispatch => {
        const loginResponse = await getLoginToken(username, password)
        if(loginResponse.error) {
            dispatch({
                type: 'LOGIN_FAIL'
            })
        } else if(loginResponse.token) {
            dispatch({
                type: 'LOGIN_SUCCESS',
                data: loginResponse
            })
        }
    }
}

export const logOutUser = () => {
 return {
     type: 'LOGOUT',
 }   
}

export const fetchLocalUser = () => {
    return {
        type: 'NO_LOGIN'
    }
}

const loginReducer = (state=initialUser, action) => {
    switch(action.type) {

        case 'LOGIN_SUCCESS': window.localStorage.setItem('user', JSON.stringify(action.data))
            return action.data

        case 'NO_LOGIN': return JSON.parse(window.localStorage.getItem('user'))
        
        case 'LOGIN_FAIL': return initialUser
        
        case 'LOGOUT': window.localStorage.removeItem('user') 
            return initialUser

        default: return state
    }
}

export default loginReducer