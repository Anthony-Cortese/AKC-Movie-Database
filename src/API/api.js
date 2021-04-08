const API_KEY = 'd2e8636';
const MOVIE_API_BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;


const getMovies = async searchTerm => {
  try {
    const request = await fetch(`${MOVIE_API_BASE_URL}&s=${searchTerm}`);
    const json = await request.json();
    return json;
  } catch (error) {
    console.error('API:getMovies', error);
  }
};

const getMovie = async id => {
  try {
    const request = await fetch(`${MOVIE_API_BASE_URL}&i=${id}`);
    const json = await request.json();
    return json;
  } catch (error) {
    console.error('API:getMovie', error);
  }
};

export { getMovies, getMovie };

https://api.themoviedb.org/3/movie/upcoming?api_key=b2277416d5d9ed434226025830448925&language=en-US&page=1
const [data, setData] = useState({movies: []})
useEffect(async () => { 
  
  
  const result = await axios ('https://api.themoviedb.org/3/movie/upcoming?api_key=b2277416d5d9ed434226025830448925&language=en-US&page=1')
    
  setData(result.data)

    return (
      <div>
          <div className="card-list">
              {data.movies.map(data => (
                <div className='movie-card'>

                <div className="card" key={data.id}>
                    <img className="image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={data.title + ' poster'}
                    />
                 <div className="content">
                    <h3 className="title">{data.title}</h3>
                    <br></br>
                    <p>RELEASE DATE: {data.release_date}</p>
                    <br></br>
                    <p>RATING: {data.vote_average}</p>
                    <br></br>
                    <p className="description">PLOT:{data.overview}</p>
                 </div>
               </div> 
            </div>
              ))}
          </div>    
      </div>
  )
}

function MovieCard({movie}) {

  return (
      <div className='movie-card'>

      <div className="card" key={movie.id}>
          <img className="image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + ' poster'}
          />
       <div className="content">
          <h3 className="title">{movie.title}</h3>
          <br></br>
          <p>RELEASE DATE: {movie.release_date}</p>
          <br></br>
          <p>RATING: {movie.vote_average}</p>
          <br></br>
          <p className="description">PLOT:{movie.overview}</p>
       </div>
     </div> 
  </div>

  )
}

export default MovieCard
