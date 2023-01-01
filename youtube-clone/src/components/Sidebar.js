import React from 'react';
import '../Sidebar.css';
import {upperIcons,middleIcons} from '../data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Sidebar() {
  return (
    <div className="sidebar">
      {/*sidebar upper icons */}
      {upperIcons.map((icons) => {
        const {id,url,icon,title} = icons;
        return (
          <section key={id} className="upper--icons">
        <a href={url} title={title}>{icon}{title}</a>
      
          </section>
        )
      })}
      <hr/>
          {/*side bar middle icons*/}
      {middleIcons.map((icons) => {
        const {id,url,icon,title} = icons;
        return (
          <section key={id} className="upper--icons">
        <a href={url} title={title}>{icon}{title}</a>
          </section>
        )
      })}
      <span className='show-toggle'>
        <KeyboardArrowDownIcon/>
        <p>Show More</p>
      </span>
      <hr/>
      
      
    </div>
  );
}

export default Sidebar;
