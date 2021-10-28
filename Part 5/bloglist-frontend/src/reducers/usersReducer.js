import { getAllUsers } from "../services/users"

const initialUsers=[]

export const getUsers = () => {
    return async dispatch => {
        const response = await getAllUsers()

        dispatch({
            type: 'INIT',
            data: response
        })
    }
}

const usersReducer = (state=initialUsers, action) => {
    switch(action.type) {

        case 'INIT': return action.data 
        default: return state        
    }
}

export default usersReducer