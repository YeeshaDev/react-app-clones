import React from 'react';
import TuneIcon from '@mui/icons-material/TuneOutlined';
import Channel from './Channel';
import  Video from './Video';
import {Link } from 'react-router-dom'
import '../Search.css';

const Search = () => {
  return (
    <div className='search--content'>
  <div className='search--filter'>
<TuneIcon/>
<h2> Filter</h2>
  </div>
  <hr/>
  <Channel
  image="https://yt3.ggpht.com/ytc/AKedOLRl8ibnwK4RWBeVYt8snxPL136gAcAjVLcgJm3tyg=s176-c-k-c0x00ffffff-no-rj-mo"
  channel="Grow with joe"
  verified
  subs="1M"
  noOfVideos={300}
  
  />
  <hr/>

  <Link to="/watch/Y05McHjBzV4">
  <Video
  title="5 MILE Low Impact Sweaty Dance Party"
  views="530k views"
  viewCount="538,713"
  subs="1m"
  channel="Growwithjo"
  timestamp="3 weeks ago"
  channelImage="https://yt3.ggpht.com/ytc/AKedOLRl8ibnwK4RWBeVYt8snxPL136gAcAjVLcgJm3tyg=s68-c-k-c0x00ffffff-no-rj"
  image="https://i3.ytimg.com/vi/Y05McHjBzV4/maxresdefault.jpg"
  description="I have made this workout so that during our water breaks we have checkpoints - if you are unable to do the full workout, work slowly towards getting to the next checkpoint each time you do this workout! This will help pace yourself and feel accomplished even if you don't complete the entire workout!"
  />
  </Link>

  <Video
  title="3 MILE FAST Walking to Lose Belly Fat (burns 600 calories!)"
  views="4M views"
  subs="1M"
  viewCount="4,970,990"
  channel="GrowWithJo"
  timestamp="1 year ago"
  channelImage="https://yt3.ggpht.com/ytc/AKedOLRl8ibnwK4RWBeVYt8snxPL136gAcAjVLcgJm3tyg=s68-c-k-c0x00ffffff-no-rj"
  image="https://i3.ytimg.com/vi/vJS9a1mpYGw/maxresdefault.jpg"
  description="If you enjoy Chloe Ting 2 Week Shred, Pamela Reif workouts, Lilly Sabri and more, but need a workout that is low impact but EFFECTIVE, you're going to love this fat burning routine; trust me it burns a lot of calories and is a lot of fun."
  />
  

  <a href ="https://youtu.be/vJS9a1mpYGw">
  <Video
  title="15 Min Daily Full Body Stretch and Scripture"
  views="53k views"
  subs="1m"
  channel="Growwithjo"
  timestamp="3 weeks ago"
  channelImage="https://yt3.ggpht.com/ytc/AKedOLRl8ibnwK4RWBeVYt8snxPL136gAcAjVLcgJm3tyg=s176-c-k-c0x00ffffff-no-rj-mo"
  image="https://i3.ytimg.com/vi/59_8pH3h4T8/maxresdefault.jpg"
  description="Did you know that your lower body (legs and glutes) are the largest muscle groups in your body that generate the most power? This is why you burn the most calories during and after a leg day workout."
  />
  </a>

  </div>
  
  )
}
export default Search;
