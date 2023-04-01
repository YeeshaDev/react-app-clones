import React from 'react'
import SideBarRow from '../SideBarRow/SideBarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import './Sidebar.css'

function Sidebar({showSidebar}) {
  return (
    <div className={showSidebar ?'sidebar--content' : 'sidebar--content active'}>
           <SideBarRow selected Icon={HomeIcon} title='Home' showSidebar={showSidebar}/>
            <SideBarRow Icon={WhatshotIcon} title='Trending' showSidebar={showSidebar}/>
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription' showSidebar={showSidebar}/>
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title='Library' showSidebar={showSidebar}/>
            <SideBarRow Icon={HistoryIcon} title='History' showSidebar={showSidebar}/>
            <SideBarRow Icon={OndemandVideoIcon} title='Your videos' showSidebar={showSidebar}/>
            <SideBarRow Icon={WatchLaterIcon} title='Watch later' showSidebar={showSidebar}/>
            <SideBarRow Icon={ThumbUpIcon} title='Liked videos' showSidebar={showSidebar}/>
            <hr />
    </div>
  )
}

export default Sidebar