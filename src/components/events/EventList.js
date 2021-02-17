import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { EventContext } from "./EventProvider.js"
import "./events.css"

export const EventList = (props) => {
    const { events, getEvents, joinEvent, leaveEvent } = useContext(EventContext)
    const history = useHistory()

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <header className="events__header">
                <h1>Level Up Game Events</h1>

                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/events/new" })
                    }}
                >Schedule New Event</button>
            </header>
            <article className="events">
                {
                    events.map(event => {
                        return <section key={event.id} className="event">
                            <div className="event__game">{event.game.title}</div>
                            <div>{event.description}</div>
                            <div>
                                {
                                    new Date(event.date).toLocaleDateString("en-US",
                                        {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })
                                }
                            @ {event.time}
                            {
                                event.joined // Ternary statements are the 💣 💥
                                    ? <button className="btn btn-3"
                                            onClick={() => leaveEvent(event.id)}
                                        >Leave
                                        </button>
                                    : <button className="btn btn-2"
                                            onClick={() => joinEvent(event.id)}
                                        >Join
                                        </button>
                            }

                            </div>
                        </section>
                    })
                }
            </article >
        </>
    )
}