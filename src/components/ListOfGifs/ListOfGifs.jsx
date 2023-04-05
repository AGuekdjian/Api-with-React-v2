import React, { useEffect, useState } from 'react'
import getGifs from "../../services/getGifs";
import Gif from "../Gif/Gif";

export default function ListOfGifs({ keyword }) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    const deleteAfterOfThirdWord = str => {
        const words = str.split(" ")
        const firstThreeWords = words.slice(0, 3)
        const newWords = firstThreeWords.join(' ')
        return newWords
    }

    useEffect(() => {
        setLoading(true)
        console.log("Actualizando los gifs...")
        getGifs({ keyword })
            .then(gif => {
                setGifs(gif)
                setLoading(false)
            })

    }, [keyword])

    if (loading) return <i>Cargando...</i>

    return (
        <div className='gifs-container'>
            {
                gifs.map(({ id, title, url }) => {
                    let newTitle = deleteAfterOfThirdWord(title)
                    return (
                        <div key={id}>
                            <Gif
                                id={id}
                                title={newTitle}
                                url={url}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}