import React from 'react'



function Result( { result }) {
 
    return (
        <div className="result">
            <img src={"http://image.tmdb.org/t/p/w185" + result.poster_path} alt={result.poster}/>
            <p>{result.title}</p>
            
        </div>
    )
}

export default Result
