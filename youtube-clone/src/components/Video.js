import React from 'react'
import {Link} from 'react-router-dom'

function Video({title,views,timestamp,image,channel,description}) {

  
  
  return (

    <div className='video--content'>
        <img src={image} alt={channel}  className="image"/>
        <div className='video--text'>
            <h3>{title}</h3>
            <p className='video--info'>
               {views} . {timestamp}
            </p>
            <p className='video--description'>{description}</p>
        </div>
    </div>
  )
}

export default Video