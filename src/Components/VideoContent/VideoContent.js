import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDownOutlined';
import SideBarRow from '../SideBarRow/SideBarRow';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcons from '@mui/icons-material/NotificationsOutlined'
import {Avatar} from '@mui/material';
import Comment from './Comment'
import './VideoContent.css';

function VideoContent({title,likeCount,
    dislikeCount,channelImage,
    subs,viewCount,description,
     publishedDate, channelTitle}) {
const [subBtn, setSubBtn] = useState (true);
const [toggleInfo, setToggleInfo] = useState (false);
 const handleClick = () => {
 setSubBtn(!subBtn)
 console.log("clicked")
 }
  return (
    <div className='videocontent'>
    <div className='videocontent--headline'>
        <h1>{title}</h1>
    </div>
    <div className='videocontent--stats'>
        <div className='flex-icons'>
                <p className='videocontent--views'>{viewCount} views • {publishedDate}</p>
                <div className="videocontent--icons">
                    <SideBarRow Icon={ThumbUpIcon} title={likeCount} />
                    <SideBarRow Icon={ThumbDownIcon} title={dislikeCount} />
                    <SideBarRow Icon={ReplyAllIcon} title='SHARE' />
                    <SideBarRow Icon={PlaylistAddIcon} title='SAVE' />
                    <SideBarRow Icon={MoreHorizIcon} title='' />
                </div>
                </div>
                <div className='videocontent--channeldesc'>
                <p>{toggleInfo ? description : `${description.substring(0,100)}...`}
                <button  className ="info--btn" onClick={() => setToggleInfo(!toggleInfo)}>
                    {toggleInfo ?  "Show less" : "more"}
                    </button>
                </p>
            </div>

                <div className="videocontent--icons">
                    <SideBarRow Icon={ThumbUpIcon} title={likeCount} />
                    <SideBarRow Icon={ThumbDownIcon} title={dislikeCount} />
                    <SideBarRow Icon={ReplyAllIcon} title='SHARE' />
                    <SideBarRow Icon={PlaylistAddIcon} title='SAVE' />
                    <SideBarRow Icon={MoreHorizIcon} title='' />
                </div>
            </div>
            
            <div className="videocontent--channel">
                <div>
                    <Avatar 
                        className='videocontent--avatar' 
                        alt={channelTitle} 
                        src={channelImage} 
                    />
                    <div className='videocontent--channelinfo'>
                        <h3 className='videocontent--channeltitle'>{channelTitle}</h3>
                        <p className='videocontent--channelsubs'>{subs} subscribers</p>
                    </div>
                    
                </div>
                <div className='videcontent--subscribe' onClick= {handleClick}>
                     {subBtn ? (<button className= "sub--btn">SUBSCRIBE</button>)
                      : (
                        <div className="sub--content">
                      <button className='sub--btn active'>
                        SUBSCRIBED 
                     </button>
                     <NotificationsIcons className='sub--icon'/>  
                      </div> )} 
                        
                </div>
                
            </div>
            <Comment/>  

    </div>
  )
}

export default VideoContent