import './App.css';
import React, {useState, useEffect} from 'react'
import SearchMovies from './SearchMovies'
import Header from './Header'
import Movie from './Movie'
import axios from 'axios'

const MOVIE_API_URL = "https://www.omdbapi.com/?s=batman&apikey=d2e8636"

const App = () => {
  // const [movies, setMovies] = useState([])
  const [movies, setMovies] = useState([])
  
  // useEffect(() => { 
  // const fetchMovies = async () => {
  // const result = await axios (
  //   'https://api.themoviedb.org/3/movie/upcoming?api_key=b2277416d5d9ed434226025830448925&language=en-US&page=1')
    
  // setMovies(result.data)
  // console.log(result.data)
  // }
  // fetchMovies()
  // },[])

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
