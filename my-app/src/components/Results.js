import React from 'react'
import Result from './Result'

function Results({ results }) {
    return (
        <section className="results">
            {results.map(result => (
                <result key={result.imdbID} result={results} />
                
            ))}
            
        </section>
        
    )

}

export default Results
