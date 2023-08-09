"use client"

import { ANIME, META } from '@consumet/extensions'
import { useEffect, useState } from 'react'
import AnimeCard from '@/components/AnimeCard'
import Navbar from '@/components/Navbar'
import type { Anime } from '@/types/Anime'
import PageContorller from '@/components/PageContorller'
import { useSearchParams } from 'next/navigation'
import Trending from '@/components/Trending'

const Anime = new ANIME.Enime()
const Anilist = new META.Anilist()


const getAnimes = async ({
    pageSettings
}: {
    pageSettings: {
        page: any
    }
}) => {
    let response: any
    
    await Anilist.fetchRecentEpisodes('gogoanime', pageSettings?.page, 100).then((res) => {
        response = res.results.filter((anime) => {
            return anime.type != "ONA"
        })
    })

    let animes = response

    return animes
}

const Animes = () => {

    let [animes, setAnimes] = useState<[] | null>(null)
    let searchParams = useSearchParams()

    let page: number | string | null = searchParams.get('p')

    page = page ? parseInt(page) : 1

    useEffect(() => {
        getAnimes({
            pageSettings: {
                page: page
            }
        }).then((data) => {
            setAnimes(data)
        })
    }, [page])

    return (
        <>
            <Navbar />
            {/* <Trending /> */}
            <PageContorller isTop={true} page={page} />
            <h1 className='text-white text-3xl mb-5 text-center'>Recently Added!</h1>
            {animes ?
                <div className='flex flex-wrap gap-10 justify-center'>
                    {animes.map((anime: Anime) => <AnimeCard isSearch={false} key={JSON.stringify(anime)} anime={anime}/>)}
                </div> :
                <div>
                    <h1 className='text-center text-2xl text-slate-600'>Loading...</h1>
                </div>
            }
            <PageContorller isTop={false} page={page} />
        </>
    )
}

export default Animes