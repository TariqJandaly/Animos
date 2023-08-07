'use client'

import React, { useState } from 'react'

const Search = () => {
    let [searchInput, setSearchInput] = useState('')

    const handleChange = (e: any) => {
      e.preventDefault()
      setSearchInput(e.target.value)
    }

    const handleEnter = (e: any) => {
        if(e.code == 'Enter') {
            window.location.replace('http://' + window.location.host + '/' + searchInput)
        }
    }
  
  
    return (
        <div onKeyDown={handleEnter} className="flex justify-center bg-transparent">
          <a href={`/`} className="px-2 py-1 bg-violet-500 text-white rounded mr-3">Home</a>
          <input placeholder='Anime name...' value={searchInput} onChange={handleChange} className="text-white outline-none bg-transparent border rounded border-violet-500 px-3 py-1 md:w-96 w-full" type="text" />
          <a href={`/${searchInput}`} className="px-2 py-1 bg-violet-500 text-white rounded ml-3">Search</a>
        </div>
    )
}

export default Search