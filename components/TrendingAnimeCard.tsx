import Link from "next/link"

const TrendingAnimeCard = ({ anime }: { anime: any }) => {
  return (
    <>
        <div className="relative w-full h-full font-mono">
            <img className="w-fit aspect-[20/6]" src={ anime.cover } alt={ anime.title.english } />
            <p className={`absolute bg-violet-600/50 px-3 py-1 rounded-lg text-white m-10 top-0 left-0 text-3xl`}>{ anime.title.english }</p>

            <p className="absolute top-0 right-0 m-10 bg-orange-500/50 text-white px-2 py-1 rounded text-2xl">{ ((anime.rating / 100) * 10).toFixed(1) }</p>
            <p className="absolute bottom-0 left-0 m-10 bg-slate-600/50 px-2 py-1 rounded-lg text-white">Episodes: { anime.totalEpisodes }</p>
            <Link className="absolute bottom-10 left-0 m-10 px-2 py-1 bg-teal-300/60 rounded-lg text-white text-xl" href={ '/' }>
                See more!
            </Link>
        </div>
    </>
  )
}

export default TrendingAnimeCard