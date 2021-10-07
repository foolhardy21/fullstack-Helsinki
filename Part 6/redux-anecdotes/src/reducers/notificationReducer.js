const notificationState = ''


export const showMessage = (text, duration) => {
    console.log(text)
    return async dispatch => {
        dispatch({
            type: 'SHOW',
            data: text
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDE'
            })
        },duration*1000)
    }
}

export const hideMessage = () => {
    return {
        type: 'HIDE'
    }
}

const notificationReducer = (state=notificationState, action) => {

    switch(action.type) {
        case 'SHOW': return action.data

        case 'HIDE': return ''
        
        default: return state
    }
}

export default notificationReducer