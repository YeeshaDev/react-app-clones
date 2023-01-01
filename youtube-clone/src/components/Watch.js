import React from 'react';
import '../Watch.css';
import ReactPlayer from 'react-player'
import SideWatch from './SideWatch';
import {Link} from 'react-router-dom'


function Watch() {
  
  return (
    <div className='watch--content'>
        <div className='row'>

   <section className='player-wrapper'> 
  
<ReactPlayer url="https://youtu.be/Y05McHjBzV4"
controls={true}
className='react-player'
width='100%'
height="90%"
/>
   </section>
  {/* <div className='watch--info'>
  <SideWatch
  title="15 Min Daily Full Body Stretch and Scripture"
  views="53k views"
  subs="1m"
  channel="Growwithjo"
  timestamp="3 weeks ago"
  channelImage="https://yt3.ggpht.com/ytc/AKedOLRl8ibnwK4RWBeVYt8snxPL136gAcAjVLcgJm3tyg=s176-c-k-c0x00ffffff-no-rj-mo"
  image="https://i3.ytimg.com/vi/59_8pH3h4T8/maxresdefault.jpg"
  description="Did you know that your lower body (legs and glutes) are the largest muscle groups in your body that generate the most power? This is why you burn the most calories during and after a leg day workout."
  />
  
  

  </div>*/}
   </div>
        </div>
  )
}

export default Watch