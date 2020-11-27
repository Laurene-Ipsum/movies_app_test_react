import React, { useState } from "react"
import axios from "axios"

import Search from './components/Search'
import Results from './components/Results'


import CarouselComponent from "./components/carousel.component";


function App() {
  const [state, setState] = useState({
    query: "",
    results: [],
    selected: {}
  });

  const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&query=spider&language=en-US&append_to_response=images&include_image_language=en,null";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&query=" + state.query).then(( {data} ) => {
       
        let result = data.results;

        setState(prevState => {
         
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
        <h1>🍿 Mais quel film voir ce soir ? 🍿</h1>
        <h2>Épineuse question ! Et si on regardait :</h2>
        <h2 className="suggestion"> </h2>
  
       </header>
       
       <main onload="test()">
           <Search handleInput={handleInput} search={search}/>
           <Results results={state.results}/>
           <CarouselComponent />       
       </main>    
    </div>
  );
  
}

export default App



