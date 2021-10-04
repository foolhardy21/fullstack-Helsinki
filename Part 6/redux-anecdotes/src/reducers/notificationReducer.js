const initialState = {
    message: ''
}

export const voteMessage = (text) => {
    return {
        type: 'VOTEFOR',
        data: text
    }
}
export const saveMessage = (text) => {
    return {
        type: 'SAVE',
        data: text
    }
}
export const hideMessage = () => {
    return {
        type: 'HIDE'
    }
}

const notificationReducer = (state= initialState, action) => {

    switch(action.type) {
        case 'SAVE': return {message: `${action.data} is saved.`}

        case 'VOTEFOR': return {message: `You voted for "${action.data}"`}

        case 'HIDE': return {message: ''}
        
        default: return state
    }
}

export default notificationReducer