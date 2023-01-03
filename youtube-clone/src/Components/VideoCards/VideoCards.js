import React from 'react';
import './VideoCards.css';
import {Avatar} from '@mui/material';

function VideoCards({image, title,
                     channel, views,
                  timestamp,channelImage}) {
  return (
    <div className='videocard--content'>
    <img src={image} 
    alt={channel}
    className="videocard--image" />
   <div className='videocard--info'>

    {/* The Avatar creates the avatar icon it is just a simple
    way to use without having to style from scratch*/}
<Avatar
 className='video--avatar'
 alt={channel}
 src={channelImage}
/>
<div className='videocard--text'>
    <h4>{title}</h4>
    <p>{channel}</p>
    <p>{views} views • {timestamp}</p>
</div>
   </div>
    </div>
  )
}

export default VideoCards