import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { GameContext } from "./GameProvider.js"
import "./games.css"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)
    const history = useHistory()

    useEffect(() => {
        getGames()
    }, [])

    return (
        <>
            <header>
                <h1>Level Up Games</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/games/new" })
                    }}
                >Register New Game</button>
            </header>
            <article className="games">
                {
                    games.map(game => {
                        return <section key={`game--${game.id}`} className="game">
                            <div className="game__title">{game.title} by {game.maker}</div>
                            <div className="game__players">{game.number_of_players} players needed</div>
                            <div className="game__skillLevel">Skill level is {game.skill_level}</div>
                            <div className="game__skillLevel">Game Type: {game.gametype.label}</div>
                        </section>
                    })
                }
            </article>
        </>
    )
}