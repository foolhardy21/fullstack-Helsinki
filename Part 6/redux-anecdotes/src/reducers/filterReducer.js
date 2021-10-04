
const filterState = ''

export const changeFilter = (value) => {
    return {
        type: 'UPDATE',
        data: value
    }
}
const filterReducer = (state=filterState, action) => {
    
    switch(action.type) {
        case 'UPDATE': return action.data

        default: return state
    }
}

export default filterReducer