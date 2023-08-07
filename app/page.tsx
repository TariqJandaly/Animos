import { Search, AnimeCard, AnimeCardNew } from "@/components/"
import { Anime } from "@/types"

export default async function Home() {
  
    let animes: Anime[] = []

    let api = await fetch(`https://api.consumet.org/meta/anilist/recent-episodes?page=1&perPage=100&provider=gogoanime`)
    let response = await api.json()

    animes = response.results

    return (
        <>
            <Search />
            <h1 className="flex justify-start text-6xl mt-10 mb-10 text-white">Today's new!</h1>
            <div className="flex gap-10 flex-wrap justify-center mt-5">
                {animes.map((anime) => {
                    return <AnimeCardNew anime={anime}/>
                })}
            </div>
        </>
    )
}
