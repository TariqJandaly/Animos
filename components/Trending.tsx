'use client'

import { META } from '@consumet/extensions'
import { useEffect, useState } from 'react'
import TrendingAnimeCard from './TrendingAnimeCard'

const animes = new META.Anilist()

const getTrending = async () => {
    let trending: any = [];
    
    await animes.fetchTrendingAnime(1, 10).then((data) => {
        trending = data.results
    })

    return await trending.filter((anime: any) => anime.cover != anime.image)
}

const Trending = () => {

    let [trending, setTrending] = useState([false])
    let [current, setCurrent]   = useState(0)

    useEffect(() => {
        getTrending().then((data) => {
            setTrending(data)
        })

        const interval = setInterval(() => {
            // updateCurrent(1)
        }, 5 * 1000);
    }, [])

    const updateCurrent = (amount: number) => {

        if(amount == 1) {
            if(current == trending.length - 1) {
                setCurrent(0)
            } else {
                setCurrent(current + 1)
            }
        } else if(amount == -1) {
            if(current == 0) {
                setCurrent(trending.length - 1)
            } else {
                setCurrent(current - 1)
            }
        }
    }

    return (
        <>
            {trending[0] &&
                <div className='relative w-full h-full'>
                    <button onClick={() => updateCurrent(-1)}
                    className='z-10 absolute text-white left-0 top-24 bg-yellow-400/50 px-2 py-1 rounded-lg mx-10'>Back</button>
                    <button onClick={() => updateCurrent(1)}
                    className='z-10 absolute text-white right-0 top-24 bg-yellow-400/50 px-2 py-1 rounded-lg mx-10'>Next</button>
                    <TrendingAnimeCard key={ JSON.stringify( trending[current]) } anime={ trending[current] } />
                </div>
            }
        </>
    )
}

export default Trending