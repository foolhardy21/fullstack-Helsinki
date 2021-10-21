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

export const notificationReducer = (state = notifications, action) => {
    console.log('inreducer')
    switch(action.type) {
        case 'SHOW': const newnotif = [...state, action.data]

        console.log('adadasdanewnotif',newnotif) 
        return newnotif
        
        case 'HIDE': return state.filter(notification => notification.id !== action.data)
        
        default: return state
    }
}