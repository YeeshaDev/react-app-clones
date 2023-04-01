import React, { lazy } from 'react';
import {useEffect,useState } from 'react';
import axios from '../../axios';
//import { useParams } from 'react-router-dom';
import './Row.css'
import YouTube from 'react-youtube';

const base_url= "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLarge}) {
const [movies,setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("")

//extracting the data from the TMDB api using async/await method
async function fetchData() {
  const request = await axios.get(fetchUrl);
  //console.log(request)
  setMovies(request.data?.results);
  return request;
}
useEffect(() => {
fetchData();
}, [fetchUrl])

const opts = {
  height:"390",
  width:"100%",
  playerVars:{
    autoplay:1,
  },
};

const handleClick = async (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  }else  {
    let trailerurl = await axios.get(
      `/movie/${movie.id}/videos?api_key=5ff708085c3730e596c6e2405743bbc8`
    );
    let trailer= trailerurl.data.results[0]?.key;
    setTrailerUrl(trailer);
  }
};


  return (
    <div className='movierow--content'>
        <h1>{title}</h1>
        <div className='row--cards'>
        {movies.map((movie) => {
          const path=movie.poster_path || movie.backdrop_path
          return (
            <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={isLarge ? "rowlarge--image" : "row--image"}
                src={`${base_url + path}`}
                alt={movie.name}
                
                
              />
          )
        })}
        </div>
        {trailerUrl && 
          <YouTube videoId={trailerUrl} opts={opts}/>
          }
    </div>
  )
}

export default Row