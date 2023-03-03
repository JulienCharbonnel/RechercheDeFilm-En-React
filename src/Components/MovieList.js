import React from "react";

const MovieList = (props) => {
    return (
        <div>
            <ul>
                {props.movies.map((movie) => (
                    /* On affiche le titre, l'année de sortie et renvoie une intrigue courte ou complète. */
                    <h2 key={movie.imdbID}>
                        {movie.Title} ({movie.Year}) - {movie.Plot}
                    </h2>
       
                ))}
            </ul>
        </div>
    );
};


export default MovieList;


