import React, {useState} from "react";
import MovieCard from './MovieCard'
import './SearchMovies.css'

export default function SearchMovies(){
  const [query, setQuery] = useState('');   
  const [movies, setMovies] = useState([]) 
  const searchMovies = async (e) => {
      e.preventDefault()  
      
      
      const url = `https://api.themoviedb.org/3/search/movie?api_key=b2277416d5d9ed434226025830448925&query=${query}&append_to_response=credits,video`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
            console.log(data.results)
        }catch(err){
            console.error(err);
        }
    }

    
    return (
      <div>
          <form className ="form"onSubmit={searchMovies}>
            
            <div className="form__group field">
              <label className="form__label"htmlFor="query"></label>
              <div className='fix'>

              <input className="form__field" type="text" name="query"
                  placeholder="Search for a film"
                  value={query} onChange={(e) => setQuery(e.target.value)}
                  />
              <button className="button" type="submit">GO FOR FILM</button>
                </div>
            </div>
          </form>
          <div className="card-list">
              {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} />
              ))}
          </div>    
      </div>
  )
}