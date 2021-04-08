import React from 'react'
import './MovieCard.css'

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
