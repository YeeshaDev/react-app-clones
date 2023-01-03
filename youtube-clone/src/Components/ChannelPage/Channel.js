import React from 'react'
import './Channel.css';


const Channel = ({image,subs,channel,noOfVideos,description}) => {
  return (
    <div className='channel--content'>
        <img
         src={image}
         alt={channel}
         className="channel--logo"
        />
         <div className="channel--text">
          <h4>{channel}</h4>
          <p>{subs} subscribers • {noOfVideos} videos</p>
        <p>{description}</p>
         </div>
         
        </div>
  )
}

export default Channel