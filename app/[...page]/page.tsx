"use client"

import { ANIME, META } from '@consumet/extensions'
import { useEffect, useState } from 'react'
import { AnimeCard } from '@/components/'
import Navbar from '@/components/Navbar'
import type { Anime } from '@/types/Anime'
import Link from 'next/link'
import PageContorller from '@/components/PageContorller'

const Anime = new ANIME.Enime()
const Anilist = new META.Anilist()


const getAnimes = async ({
    pageSettings
}: {
    pageSettings: {
        page: number
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

const Animes = ({ params }: any) => {

    let [animes, setAnimes] = useState([])
    let page = params.page <= 0 ? 1 : parseInt(params.page)

    useEffect(() => {
        getAnimes({
            pageSettings: {
                page
            }
        }).then((data) => {
            setAnimes(data)
        })
    }, [])

    const update = (p: number) => {

        getAnimes({
            pageSettings: {
                page: p
            }
        }).then((data) => {
            setAnimes(data)
        })
    }


    return (
        <>
            <Navbar />
            <PageContorller isTop={true} page={page} />
            <div className='flex flex-wrap gap-10 justify-center'>
                {animes.map((anime: Anime) => <AnimeCard isSearch={false} key={JSON.stringify(anime)} anime={anime}/>)}
            </div>
            <PageContorller isTop={false} page={page} />
        </>
    )
}

export default Animes