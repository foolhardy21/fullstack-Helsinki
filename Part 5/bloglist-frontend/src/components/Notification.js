import React from "react"
import { useSelector } from "react-redux"

const Notification = () => {
    const notifications = useSelector(state => state)
    
    if(notifications.length > 0) {
        return (
            <p>{notifications[0].text}</p>
        )
    }
    return (
        <></>
    )
}

export default Notification