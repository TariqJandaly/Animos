import { AnimeCard, Search } from "@/components"
import { Anime } from "@/types"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default async function Home({ params }: any) {

    let animes: Anime[] = []

    let search = params.search

    let api = await fetch(`https://api.consumet.org/anime/enime/${search}?page=1`)
    let response = await api.json()

    if(response.statusCode != 500) {
        animes = response.results
    }



    animes?.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())

    return (
        <>
            <Search />
            {animes?.length == 0 &&
                    <div className="flex w-full justify-center mt-10">
                        <h1 className="text-white/10 text-9xl">Nothing here....</h1>
                    </div>
            }
            <div className="flex gap-10 flex-wrap justify-center mt-5">
                {animes?.map((anime) => {
                    return (
                        <>
                            <AnimeCard anime={ anime } />
                        </>
                    )
                })}
            </div>
        </>
    )
}