'use client'

import { AnimeCard, AnimeCardNew } from "@/components/"
import { Anime } from "@/types"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const MainPage = () => {

    let [animes, setAnimes] = useState([])
    let [isSearch, setIsSearch] = useState(false)

    let searchParams = useSearchParams()

    const search = searchParams.get('q')

    let page = searchParams.get('p')

    const GetAnimes = () => {
        fetch(`https://api.consumet.org/anime/enime/${search}?page=${page}`).then(response => {
            return response.json()
            .then(data => {
                data = data.results.sort((animeA: any, animeB: any) => new Date(animeB.releaseDate).getTime() - new Date(animeA.releaseDate).getTime())
                setAnimes(data.filter((anime: any) => anime.type != "ONA"))
            })
        })
    }

    const GetHomeAnimes = () => {
        fetch(`https://api.consumet.org/meta/anilist/recent-episodes?page=${page ? page : 1}&perPage=100&provider=gogoanime`).then(response => {
            return response.json()
            .then(data => {
                setAnimes(data.results.filter((anime: any) => anime.type != "ONA"))
            })
        })
    }

    useEffect(() => {
        if(search) {
            GetAnimes()
            setIsSearch(true)
        } else {
            GetHomeAnimes()
            setIsSearch(false)
        }
    }, [])

    return (
        <>
            {!isSearch && <ul className="flex flex-wrap gap-10 mt-10 justify-center">
                {animes?.map((anime: any) => {
                    return <AnimeCardNew key={JSON.stringify(anime, null, 4)} anime={anime} />
                })}
            </ul>}

            {isSearch && <ul className="flex flex-wrap gap-10 mt-10 justify-center">
                {animes?.map((anime: any) => {
                    return <AnimeCard key={JSON.stringify(anime, null, 4)} anime={anime} />
                })}
            </ul>}
        </>
    )
}

export default MainPage