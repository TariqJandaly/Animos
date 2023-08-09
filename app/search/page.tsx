"use client"

import { ANIME, META } from '@consumet/extensions'
import { useEffect, useState } from 'react'
import AnimeCard from '@/components/AnimeCard'
import Navbar from '@/components/Navbar'
import type { Anime } from '@/types/Anime'

import { useSearchParams } from 'next/navigation'

const Anime = new ANIME.Enime()
const Anilist = new META.Anilist()


const getAnimes = async ({ Search }: { Search: string }) => {
    let response: any
    
    await Anime.search(Search, 1, 100).then((res) => {
        response = res.results.filter((anime) => {
            return anime.type != "ONA"
        })

        // response = response.sort((a: any, b: any) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
    })

    let animes = response

    return animes
}

const Animes = () => {
    let [animes, setAnimes] = useState([])

    let searchParams = useSearchParams()

    let search = searchParams.get('q')

    useEffect(() => {
        getAnimes({
            Search: search ? search : 'one piece'
        }).then((data) => {
            setAnimes(data)
        })
    }, [search])


    return (
        <>
            <Navbar />
            <div className='flex flex-wrap gap-10 justify-center'>
                {animes.map((anime: Anime) => <AnimeCard isSearch={true} key={JSON.stringify(anime)} anime={anime}/>)}
            </div>
        </>
    )
}

export default Animes