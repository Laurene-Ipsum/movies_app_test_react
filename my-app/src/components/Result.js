import React from 'react'



function Result( { result }) {
 
    return (
        <div className="result">
            <img src={result.poster_path} alt="test"/>
            <p>{result.title}</p>
            <p>{result.original_title}</p>
            
        </div>
    )
}

export default Result
