import React,{useState, useEffect} from 'react';
import axios from '../../axios';
import requests from '../../request';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {

const [movieBanner,setMovieBanner] = useState([]);

useEffect(() => {
async function fetchData() {
const request = await axios.get(requests.fetchTrending);

//to get random data results for the banner
setMovieBanner(request.data.results [
Math.floor(Math.random() * request.data.results.length - 1)
]);

return request;
    }
    fetchData();
}, [])

console.log(movieBanner)

  return (
    <header className='moviebanner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movieBanner ?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}
    >
        <div className='banner--content'>
          <div className="banner--header">
            <img src="./images/netflixLogo.png"
            alt="logo"
            className='netflix--logo'
            />
            <Link to='/'>
            <Avatar 
            src='./images/avatar1.png' 
            alt="avatar"
            className='avatar'/>
            </Link>
          </div>
          <div className='banner-details'>
         <h1 className='banner--title'>

            {/*This means that the movie banner should use any of the title,name or original name 
            as the image title since the api name object are not consistent
            using the optional chaining */}

            {movieBanner?.title || movieBanner ?.name || movieBanner ?.original_name}
         </h1>
         <div className='banner--btns'>
            <button className='banner--btn'>Play</button>
            <button className='banner--btn'>My List</button>
         </div>
         <h2 className='banner--info'>{movieBanner.overview}</h2>
        </div>
        </div>
        <div className='fade--in'></div>
        </header>
  )
}

export default Banner