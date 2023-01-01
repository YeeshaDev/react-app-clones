import React from 'react';
import {mainPage} from '../data';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Main.css';


function Main() {
  return (
    <div className='main--page'>
      <h1>Recommended</h1>
      <div className='main--section'>
    
        {mainPage.map((item) => {
            const{id,title,image,timestamp,views,channel,channelImage} = item;
            return (
            <section key={id} className="video--info">
                <img src={image} alt={channel} className="video--img"/>
                <div className='details'>
                    <img src={channelImage} alt={channel} className="channel--img"/>
                    <div>
                <p className='title'>{title}</p>
                <div className='channel--name'>
                <p>{channel}</p>
                <CheckCircleIcon className='check--icon'/>
                </div>
                
                <div className="views--details">
                <p>{views}</p>
                <p><span>.</span> {timestamp}</p>
                </div>
                </div>
                </div>
                
            </section>
            )
        })}
        </div>
    </div>
  )
}

export default Main