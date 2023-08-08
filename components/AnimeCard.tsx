import { Anime } from "@/types"

const AnimeCard = (props: { anime: Anime, isSearch: boolean }) => {

    let anime = props.anime

    return (
        <>
            <div className="overflow-hidden w-56 shadow-slate-900 text-white shadow-2xl rounded-xl relative bg-slate-900/50">
                <div className="relative w-56 h-80">
                    <img className="w-56 h-80" src={ anime.image } />
                    {typeof anime.rating == 'number' &&
                        <p className="absolute top-0 right-0 m-2 px-3 py-2 rounded-lg bg-orange-400/70 text-white">{ ((anime.rating / 100) * 10).toFixed(1) }</p>
                    }
                    <p className="absolute top-0 left-0 m-2 px-3 py-2 rounded-lg bg-red-400/70 text-white">{ anime.type }</p>
                    {!props.isSearch && 
                        <p className="absolute bottom-0 left-0 m-2 px-3 py-2 rounded-lg bg-blue-400/70 text-white">{ anime.episodeTitle }</p>
                    }
                </div>

                
                <div className="flex justify-center px-5 py-2 text-center">
                    <p className="text-xl">{ typeof anime.title == 'string' ? anime.title : (anime.title.english != null ? anime.title.english : anime.title.userPreferred) }</p>
                </div>


            </div>
        </>
    )
}

export default AnimeCard