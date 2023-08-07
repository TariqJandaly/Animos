import { Anime } from "@/types"

const AnimeCardNew = (props: { anime: any }) => {

  let anime = props.anime

  return (
    <div className="w-56 shadow-slate-900 text-white shadow-2xl rounded bg-slate-900/50">
      <div className="relative">
        <img loading="lazy" className="relative w-56 h-80" src={ anime.image } />
        <p className="absolute top-0 left-0 m-2 px-3 py-2 rounded-lg bg-red-400 text-white">{ anime.type }</p>
        <p className="absolute top-0 right-0 m-2 px-3 py-2 rounded-lg bg-orange-400 text-white">{ ((anime.rating / 100) * 10).toFixed(1) }</p>
        <p className="absolute bottom-0 left-0 m-2 px-3 py-2 rounded-lg bg-orange-400 text-white">{ anime.episodeTitle }</p>
      </div>
      <div className="flex justify-center px-5 py-2">
        <p className="text-xl">{ anime.title.english ? anime.title.english : anime.title.userPreferred }</p>
      </div>
    </div>
  )
}

export default AnimeCardNew