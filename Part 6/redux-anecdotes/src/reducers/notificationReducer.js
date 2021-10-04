const notificationState = ''


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

const notificationReducer = (state=notificationState, action) => {

    switch(action.type) {
        case 'SAVE': return `${action.data} is saved.`

        case 'VOTEFOR': return `You voted for "${action.data}"`

        case 'HIDE': return ''
        
        default: return state
    }
}

export default notificationReducer