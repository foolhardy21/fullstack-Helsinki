const notifications = []
let notificationId = 0

export const showNotification = (text) => {

    return async dispatch => {
        const id = notificationId++
        dispatch({
            type: 'SHOW',
            data: {
                id: id,
                text: text
            }
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDE',
                data: id
            })
        },3000)
    }
}

const notificationReducer = (state = notifications, action) => {

    switch(action.type) {
        case 'SHOW': return [...state, action.data]
        
        case 'HIDE': return state.filter(notification => notification.id !== action.data)
        
        default: return state
    }
}

export default notificationReducer