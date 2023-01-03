import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function MobileHeader({input,handleChange,openVoiceSearch,backArrow}) {
    return (
        <div>
          <form className='mobile--headerSearch'>
            <span title='Back' className='arrow--container'>
            <ArrowBackIcon onClick={backArrow} className='back--arrow'/>
            </span>
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
        </div>
    )
}

export default MobileHeader
