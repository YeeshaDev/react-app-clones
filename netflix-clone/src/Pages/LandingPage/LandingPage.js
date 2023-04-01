import React, { useState } from 'react';
import './LandingPage.css';
import Accordion from '../../Components/Accordion/Accordion';
import Footer from '../../Components/Footer/Footer';
import {Link,useHistory} from 'react-router-dom';
import {auth } from '../../Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'

function LandingPage() {

  const history = useHistory();
  const[email,setEmail] = useState ("");
  const[error, setError] = useState ("")


  const signUp = () => {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!email || regex.test(email) === false){
      let message ="This Email is invalid!"
      setError(message);
}else {
  setError("")
  history.push("/signup")
}
  }
  return (
    <section className='landingPage'>
        <div className='landing--content'>
          <div className='landing--banner' >
            <div className='landing--upper'>
            <img 
            src="./images/netflixLogo.png"
            className='netflix--logo'
            alt="netflix logo"/>
            <div className='buttons'>
            <Link to="/home" style={{textDecoration:'none'}}>
            <button className='view--btn'>View Demo</button>
          </Link>
          <Link to="/login" style={{textDecoration:'none'}}>
            <button className='signup--btn'>Sign In</button>
          </Link>
            </div>
            </div>
            <div className='landing--text'>
              <h1>Unlimited movies, TV<br/> shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h4>Ready to watch?Enter your email to create
                or restart your membership.
              </h4>
              <div className='getStarted--form'>
              <input type="text" 
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <p className="error">{error}</p>
              <button className='getStarted--btn' onClick={signUp}>Get Started</button>
              </div>
            </div>
          </div>
          <hr/>
          <div className='landing--middle'>
            <div className='tv--text'>
            <h1>Enjoy on your TV</h1>
            <h3>Watch on Smart TVs, Playstation,Xbox,
              Chromecast,Apple TV,Blue-ray players, and more
            </h3>
            </div>
            <div className='tv'>
            <img src="./images/tv.png" alt="" className='tv--img'/>
            <div className='story--video'>
            <video className="storycard--video" 
            data-uia="our-story-card-video" 
            autoPlay={true} playsInline={true} 
            muted={true} loop={true}>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" 
              type="video/mp4">

              </source>

            </video>
            </div>
            </div>
            
          </div>
          <hr/>
          <div className='landing--lower'>
            <div className='mobile--content'>
            <div className='mobile--text'>
            <h1>Download your shows to<br/> watch offline.</h1>
            <h3>Save your favourites easily and always
              have something to<br/> watch.
            </h3>
            </div>
            <div className='lower--image'>
              <img src="./images/mobilebg.jpg" alt=""/>
              <div className='image--card'>
                <div className='boxshot--content'>
                <img src="./images/boxshot.png" 
                alt="boxshot"
                className='boxshot--image'/>
                <div className='imagecard--text'>
                <h2>Stranger Things</h2>
                <h4>Downloading...</h4>
                </div>
                </div>
                <div className='animated--gif'>
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt=""
                  />
                </div>
              </div>
            </div>
            </div>
            <hr/>
            <div className='watch--text'>
            <h1>Watch everywhere.</h1>
            <h3>Stream unlimited movies and TV shows on
              your phone, tablet, laptop, and TV.
            </h3>
            </div>
            <hr/>
            <div className='kid--text'>
              <div className='kid--textInfo'>
              <h1>Create profiles for kids.</h1>
              <h3>Send kids on aventures with their favourites
                characters in a space made just for them-free with your membership.
              </h3>
              </div>
              <img src="./images/netflixbg-2.png"/>
            </div>
          </div>
          <hr/>
          <Accordion />
          <div className='kickstart--content'>
          <h3 className='kickstart--formtext'>Ready to watch? Enter your email 
              to create or restart your membership.</h3>
          <div className='getStarted--form kickstart'>
              <input type="text" 
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <button className='getStarted--btn' onClick = {signUp}>
                Get Started 
               </button>
              </div>
        </div>
        </div>
        <hr/>
        <Footer />
        </section>
  )
}

export default LandingPage