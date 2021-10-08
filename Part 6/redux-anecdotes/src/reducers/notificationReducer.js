const notificationState = []
let notificationId = 0

export const showMessage = (text, duration) => {
    
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
        },duration*1000)
    }
}

const notificationReducer = (state=notificationState, action) => {

    switch(action.type) {
        case 'SHOW': return [...state, action.data]  

        case 'HIDE': return state.filter(notification => notification.id !== action.data) 
        
        default: return state
    }
}

export default notificationReducer