import React,{useState} from 'react'
import './App.css';
import Row from './Components/MovieRow/Row';
import Banner from './Components/MovieBanner/Banner';
import requests from './request';
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';
import Payment from './Pages/PaymentPage/Payment';
import LandingPage from './Pages/LandingPage/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/home">
          <div className='container'>
          
      <Banner/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}
      isLarge/>
      {/*<Row title="New Release" fetchUrl={requests.fetchUpcoming}
       />*/}
      
      <Row title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
       />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      
      </div>
      </Route>
      <Route path="/payment">
        <Payment/>
      </Route>
        <Route path="/login">
        <Login/>
      </Route>
        <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/">
        <div className='container'>
        <LandingPage/>
        </div>
      </Route>
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
