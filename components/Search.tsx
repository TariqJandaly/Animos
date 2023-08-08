'use client'

import Link from "next/link"
import { useState } from "react"

const Search = () => {
    let [Search, setSearch] = useState('')

    const handleChange = (e: any) => {
        setSearch(e.target.value)
    }

    return (
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 mb-10">
            <input onChange={handleChange} className="bg-transparent outline-none text-white border border-violet-500 px-3 py-1 rounded" value={Search} type="text" placeholder="Anime name..." />
            <Link className="text-white bg-violet-400 hover:bg-violet-600 py-1 px-3 rounded transition-colors" href={Search != '' ? `/search/${Search}` : '/'}>Search</Link>
        </div>
    )
}

export default Search