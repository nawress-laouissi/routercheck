import React from 'react'
import {movies} from '../Data/Movies'
import {  Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Trailer() {
    const {id} = useParams()
    const movie= movies.find(movie=> movie.id===Number(id))

  return (
    <div>
        <div  style={{backgroundColor: "orange", justifyContent: 'center', paddingTop: "50", width:"100"}}>
        <iframe width="560" 
        height="315" 
        src={movie.trailer}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        <p>{movie.description}</p>
        
        </div>
        <Link to={'/'}>
        <Button> back to movie Card</Button>
        </Link>
        
    </div>
  )
}

export default Trailer