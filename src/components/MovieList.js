import React from 'react'
import {movies }from '../Data/Movies'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

function MovieList() {
  return (
    <div>
        <h1> Movie Card</h1>
        <Link to={`/trailer/${movies.id}`}>
        {
            movies.map(movie=>
                <MovieCard  movie={movie}/>
            
        )}
        </Link>
        
    </div>
  )
}

export default MovieList