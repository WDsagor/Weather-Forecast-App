import React from 'react'

const Search = () => {
  return (
    <div className="w-1/2 mx-auto pt-6" >
    {/* <input type="text" placeholder="Type your city name" className="input rounded-3xl input-bordered input-md w-full max-w-md" />
    <button className="btn rounded-3xl btn-accent">Search</button> */}
    <div className="form-control">
        <div className="input-group rounded-3xl">
            <input type="text" placeholder="Search…" className="input input-bordered w-full" />
            <button className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
         </button>
        </div>
    </div>
  </div>
  )
}

export default Search