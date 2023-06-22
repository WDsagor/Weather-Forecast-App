import React from 'react'

const Search = () => {
  return (
    <div className="w-1/2 mx-auto pt-14 flex" >
    <input type="text" placeholder="Type your city name" className="input rounded-3xl input-bordered input-md w-full max-w-md" />
    <button className="btn rounded-3xl btn-accent">Search</button>
  </div>
  )
}

export default Search