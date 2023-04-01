import React from 'react';
import Avatar from '@mui/material/Avatar';
import Channel from '../ChannelPage/Channel';
import './ChannelVideos.css'

const Videos = ({image,channel,timestamp,title,description,views}) => {
  return (
    <div className='videorow'>
      
          <img src={image} alt="" className='videorow--img'/>
          <div className="videorow--text">
              <h3>{title}</h3>
              <div className='videorow--name'>
              
              
                </div>
                <p className='videorow--views'>{views} views • {timestamp}
              </p>
              
              {/*<Avatar
              className='avatar' 
              alt={image}
  src={image}/>*/}
                
              <p className='videorow--description'>
                {description}
              </p>
          </div>
        </div>
  )
}

export default Videos