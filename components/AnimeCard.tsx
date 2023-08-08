import { Anime } from "@/types"

const AnimeCard = (props: { anime: Anime }) => {

  let anime = props.anime

  return (
    <li className="overflow-hidden w-56 shadow-slate-900 text-white shadow-2xl rounded relative bg-slate-900/50">
      <img className="w-56 h-80" src={ anime.image } />
      <div className="flex justify-center px-5 py-2">
        <p className="text-xl">{ anime.title }</p>
      </div>

      <p className="absolute top-0 left-0 m-2 px-3 py-2 rounded-lg bg-red-400/70 text-white">{ anime.type }</p>
      <p className="absolute top-0 right-0 m-2 px-3 py-2 rounded-lg bg-orange-400/70 text-white">{ ((anime.rating / 100) * 10).toFixed(1) }</p>
    </li>
  )
}

export default AnimeCard