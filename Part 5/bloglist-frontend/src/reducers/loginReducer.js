import { getLoginToken } from "../services/blogs"

const initialUser = {
    loginSuccess: false,
    data: '',
    logOutClicked: false,
    invalidCred: ''
}

export const getUser = (username, password) => {
    return async dispatch => {
        const loginResponse = await getLoginToken(username, password)
        if(loginResponse.error) {
            dispatch({
                type: 'LOGIN_FAIL',
                data: loginResponse.error
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
            return {...initialUser, loginSuccess: true, data: action.data, invalidCred: ''}

        case 'NO_LOGIN': const localUser = JSON.parse(window.localStorage.getItem('user'))
            return (localUser) ? {...initialUser, loginSuccess: true, data: localUser, invalidCred: ''}
                : state 
        
        case 'LOGIN_FAIL': return {...initialUser, invalidCred: action.data}
        
        case 'LOGOUT': window.localStorage.removeItem('user') 
            return {...initialUser, logOutClicked: true}

        default: return state
    }
}

export default loginReducer