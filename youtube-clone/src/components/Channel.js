import React from 'react';
import {Avatar} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutlined';

function Channel({image,subs,verified,description,channel,noOfVideos}) {
  return (
    <div className='channel--content'>
        <Avatar className='avatar--img' 
        alt={channel}
        src={image}/>
        <div className='channel--text'>
            <h4>{channel}{verified && <CheckCircleIcon/>}</h4>
            <p>{subs} subscribers .{noOfVideos} videos</p>
            
        </div>
        </div>
  )
}

export default Channel