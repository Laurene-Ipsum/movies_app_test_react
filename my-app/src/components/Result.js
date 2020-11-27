import React from 'react'

function Result( { result }) {
   
    return (
        <div className="result">
            <img src={"http://image.tmdb.org/t/p/w185" + result.poster_path} alt={result.poster}/>
            <div className="underPict">
            <p className="title">{result.title}</p>
            <p className="date">{result.release_date}</p>
            </div>
        </div>
    )
}
export default Result
