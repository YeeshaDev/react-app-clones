import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import '../Header.css';


function Navbar() {

  const [input,setInput] = useState("")
  return (
    
    //desktop
    <>
    <header className='desktop--header'>
      <div className='logo'>
    <MenuIcon  className='icon menu--icon'/>
    <Link to="/">
    <img src='../images/youtube-logo.png' 
    alt='youtube-icon'
    className='youtube--icon'/>
    </Link>

    <h3>Youtube <sup>NG</sup></h3>
    </div>
    <div className='search'>
      <div className='search--container'>
      <input type="search" 
      placeholder='search'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <Link to={`/search/${input}`}>
      <SearchIcon className='icon desktop-search--icon'/>
      </Link>
      </div>
  <MicIcon className='icon mic--icon'/>
    </div>
    <div className='desktop--icons'>
      <span>
<VideoCallIcon className='icon video--icon'/>
</span>

<span>
<NotificationsIcon className='icon notify--icon'/>
</span>
<span>
<img src="../images/avatar1.png" alt='avatar' className='avatar'/>
</span>
    </div>
</header>

<header className='mobile--header'>
      <div className='logo'>
    <MenuIcon  className='icon menu--icon'/>
    <img src='../images/youtube-logo.png' 
    alt='youtube-icon'
    className='youtube--icon'/>
    <h3>Youtube <sup>NG</sup></h3>
    </div>
    
    <div className='mobile--icons'>
      <span>
    <SearchIcon className='icon mobile-search--icon'/>
</span>
    <span>
      
      <MicIcon className='icon mobile-mic--icon'/>
      </span>
        
      <span>
<VideoCallIcon className='icon video--icon'/>
</span>

<span>
<NotificationsIcon className='icon notify--icon'/>
</span>
<span>
<img src="../images/avatar1.png" alt='avatar' className='avatar'/>
</span>
    </div>
  </header>
    </>
  
  )
}

export default Navbar