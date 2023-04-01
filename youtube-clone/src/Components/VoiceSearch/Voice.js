import React from 'react';
import './Voice.css';
import MicIcon from '@mui/icons-material/Mic';
import CloseIcon from '@mui/icons-material/Close';

function Voice({closeVoiceSearch,openVoiceSearch}) {
    return (
        <div className='voice--content'>
        <div className='voice--modal'>
        <h3>Listening...</h3>
        <span className='close--icon' onClick={closeVoiceSearch}>
            <CloseIcon className='close'/>
            </span>
            <span className='voice--icon' onClick={openVoiceSearch}>
            <MicIcon className='voice--mic'/>
            </span>
        
            </div>
         
        </div>
    )
}

export default Voice
