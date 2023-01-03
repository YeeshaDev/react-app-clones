import React, { useState } from 'react';
import MobileHeader from './Components/Header/MobileHeader';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import RecommendedVideos from './Components/RecommendedVideos/RecommendedVideos';
import Search from './Components/SearchPage/Search';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import {BrowserRouter as Router,Route,Switch,useHistory} from 'react-router-dom';
import Voice from './Components/VoiceSearch/Voice';
import { recognition } from './Components/VoiceRecognition/VoicRecognition';
import './App.css';

function App() {
  const[voiceSearch,setVoiceSearch] = useState (false);
  const [input,setInput] = useState ("")
  const[showSidebar,setShowSidebar] = useState (true)
  const [mobileSearch,setMobileSearch] = useState(false)
   
  const handleSearch = () => {
    setMobileSearch(!mobileSearch)
       }
    const backArrow = () => {
      setMobileSearch(false)
      console.log('clicked')
    }

  let history = useHistory();
const handleChange = (e) => {
  setInput(e.target.value)
}
const toggleSidebar = () => {
  setShowSidebar(!showSidebar)

}
  const openVoiceSearch = () => {
    setVoiceSearch(true)
    recognition.start();
    recognition.onresult =(event) => {
      console.log(event)
      const {transcript} = event.results[0][0];
      if(transcript !== null || transcript !== "" || transcript !== " "){
        setVoiceSearch(false)
        setInput(transcript)
        history.push(`/search/${input}`)
      }else {
        recognition.start()
      }
    }
  }

  const closeVoiceSearch = () => {
    setVoiceSearch(false)
    recognition.stop();
    
  }
  return (
    <div className="App">
      <Router>
        {voiceSearch ? (<Voice input={input} closeVoiceSearch={closeVoiceSearch} 
      openVoiceSearch={openVoiceSearch}/>) : null}
      {mobileSearch ? 
      (<MobileHeader
  input={input}
  handleChange={handleChange}
  openVoiceSearch={openVoiceSearch}
  backArrow={backArrow}
  />) :(<Header input= {input} 
    const handleChange={handleChange}
    openVoiceSearch={openVoiceSearch}
    handleClick={toggleSidebar}
    handleSearch={handleSearch}/>)
    }
      <Switch>
        <Route path="/watch/:videoId">
          <div className='container'>
           <VideoPlayer />
           
           </div>
          </Route>
        <Route path="/search/:searchQuery">
          <div className='container'>
           <Sidebar />
           <Search />
           
           </div>
          </Route>
          <Route path="/">
            <div className='container'>
          <Sidebar showSidebar={showSidebar}/>
          <RecommendedVideos />
          
          </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
