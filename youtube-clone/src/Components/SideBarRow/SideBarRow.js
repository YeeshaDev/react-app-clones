import React, { useState } from 'react';
import './SideBarRow.css';

function SideBarRow({selected,title,Icon,showSidebar}) {
  
  return (
    <div className={`sideContent ${ selected ? 'selected' : ''}`} title={title}>
    <Icon className="sideIcons" />
    {showSidebar && <h2 className='title'>{title}</h2>}
    </div>
  )
}

export default SideBarRow