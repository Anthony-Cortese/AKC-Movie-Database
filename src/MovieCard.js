import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="card" key={movie.id}>
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
        <div className="content">
          <h3 className="title">{movie.title}</h3>
          <br></br>
          <p>
            <strong>RELEASE DATE:</strong> {movie.release_date}
          </p>
          <br></br>
          <p>
            <strong>RATING:</strong> {movie.vote_average}
          </p>
          <br></br>
          <p className="description">
            <strong>PLOT:</strong> {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
