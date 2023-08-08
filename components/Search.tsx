'use client'

import React, { useState } from 'react'

const Search = () => {
    let [searchInput, setSearchInput] = useState('')

    const handleChange = (e: any) => {
      setSearchInput(e.target.value)

      e.preventDefault()
    }

    const handleKeyDown = (e: any) => {
      if(e.code == 'Enter') {
        handleClick()
      }
    }

    const handleClick = () => {
      window.location.replace('http://' + window.location.host + '/?q=' + searchInput)
    }
  
    return (
        <div className="block md:flex justify-between bg-transparent items-center">
          <div className='text-white md:text-3xl text-2xl md:mb-0 mb-10'>Anima</div>
          <div className='flex'>
            <a href={`/`} className="px-2 py-1 bg-violet-500 text-white rounded mr-3">Home</a>
            <input onKeyDown={handleKeyDown} placeholder='Anime name...' value={searchInput} onChange={handleChange} className="text-white outline-none bg-transparent border rounded border-violet-500 px-3 py-1 md:w-96 w-full" type="text" />
            <button onClick={handleClick} className="px-2 py-1 bg-violet-500 text-white rounded ml-3">Search</button>
          </div>
          <div></div>
        </div>
    )
}

export default Search