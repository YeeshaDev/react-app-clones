import React from 'react';
import ReactPlayer from 'react-player'
import './Video.css'

//building the video component where we can watch each videos with react-youtube library.

function Video({videoId}) {
  return (
    <div className='watch--video'>

  <ReactPlayer url={`https://youtu.be/${videoId}`}
controls={true}
className='react-player'
width='140%'
height="400px"
/>
        </div>
  )
}

export default Video