import React, { useState } from "react"

export const EventContext = React.createContext()

export const EventProvider = (props) => {
    const [ events, setEvents ] = useState([])

    const joinEvent = eventId => {
        return fetch(`http://localhost:8000/events/${ eventId }/signup`, {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
    }

    const getEvents = () => {
        return fetch("http://localhost:8000/events", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }

    return (
        <EventContext.Provider value={{ events, getEvents, joinEvent }} >
            { props.children }
        </EventContext.Provider>
    )
}