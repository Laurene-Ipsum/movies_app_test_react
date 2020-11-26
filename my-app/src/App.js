import React, { useState } from "react"
import axios from "axios"

import Search from './components/Search'
import Results from './components/Results'



function App() {
  const [state, setState] = useState({
    query: "",
    results: [],
    selected: {}
    
  });
  const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&query=spider";
  

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&query=" + state.query).then(( {data} ) => {
        console.log(data); //données ok dans data
        let result = data;

        setState(prevState => {
          console.log(result); // resultat undefined
          return { ...prevState, results:result }
         
        })
      });
    }
  }

  const handleInput = (e) => {
     let query = e.target.value;
      
      setState(prevState => {
        
        return { ...prevState, query: query }
      });
      console.log(state.query)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>test</h1>
       </header>
       <main>
         <Search handleInput={handleInput} search={search} />
         <Results results={state.results}/>
       </main>
    </div>
  );
  
}

export default App
