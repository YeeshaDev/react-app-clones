import React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';

function Header({input,openVoiceSearch,handleChange,handleClick,handleSearch}) {
 
    const handleSubmit = (event)=> {
      event.preventDefault()
    }

  return (
    <div className='header--content'>
    <header className='desktop--header'>
      <div className='logo'>
    <MenuIcon  className='icon menu--icon' onClick={handleClick}/>
    <Link to="/">
    <img src='../images/youtube-logo.png' 
    alt='youtube-icon'
    className='youtube--icon'/>
    </Link>

    <h3>Youtube <sup>NG</sup></h3>
    </div>
    <form onSubmit={handleSubmit}>
    <div className='search'>
      <div className='search--container'>
        
      <input type="search" 
      placeholder='search'
      value={input}
      onChange={handleChange}
      />
       <Link to={`/search/${input}`} style={{textDecoration:'none'}}>
      <SearchIcon className='icon desktop-search--icon'/>
      </Link>
      
      </div>
  <MicIcon className='icon mic--icon' onClick={openVoiceSearch}/>
    </div>
    </form>
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
    <MenuIcon  className='icon menu--icon' onClick={handleClick}/>
    <img src='../images/youtube-logo.png' 
    alt='youtube-icon'
    className='youtube--icon'/>
    <h3>Youtube <sup>NG</sup></h3>
    </div>
    
    <div className='mobile--icons'>
      <span title="search">
    <SearchIcon className='icon mobile-search--icon' onClick={handleSearch}/>
</span>
    <span onClick={openVoiceSearch} title="Search with your voice">
      
      <MicIcon className='icon mobile-mic--icon'/>
      </span>
        
      <span title="Create">
<VideoCallIcon className='icon video--icon'/>
</span>

<span title="Notifications">
<NotificationsIcon className='icon notify--icon'/>
</span>
<span>
<img src="../images/avatar1.png" alt='avatar' className='avatar'/>
</span>
    </div>
    
  </header>
    </div>
  )
}

export default Header