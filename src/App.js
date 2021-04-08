import './App.css';
import React, {useState, useEffect} from 'react'
import SearchMovies from './SearchMovies'
import Header from './Header'
import Movie from './Movie'

const MOVIE_API_URL = "https://www.omdbapi.com/?s=batman&apikey=d2e8636"

const App = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
      });
  }, []);
   

  return (
    <div className="App">
      <div>
      <Header />
      </div>
      <SearchMovies />
      <div>
        </div>     
      <div className='images'>
        {movies.map((movie,index) => (
       
          <Movie key={`${index}${movie.Title}`} movie={movie}/>
          ))}
          </div>
      </div>
  );
}

export default App;
