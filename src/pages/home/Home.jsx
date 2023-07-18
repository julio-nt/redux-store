import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [games, setGames] = useState([])

    const apiKey = process.env.REACT_APP_RAWG_API_KEY
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=10`;


    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                setGames(response.data.results)
            })
            .catch((error) => {
                console.error('Erro ao buscar jogos: ', error)
            })
    }, [apiUrl])

    return (
        <div>
            <h2>Lista de jogos</h2>
            <ul>
                {games.map(game => {
                    return (
                        <li key={game.id}>
                            <img src={game.background_image} alt={game.name} style={{ width: '500px', height: '300px' }} />
                            <h3>{game.name}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
