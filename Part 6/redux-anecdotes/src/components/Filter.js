import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = () => {
    const style = {
        marginBottom: 20
    }
    const filterValue = useSelector(state => state.filter)
    const dispatch = useDispatch()
    
    function handleChange(e) {
        dispatch(changeFilter(e.target.value))
    }
    return (
        <div style={style}>
            <input type='text' placeholder='search....' value={filterValue} onChange={handleChange} />
        </div>
    )
}

export default Filter