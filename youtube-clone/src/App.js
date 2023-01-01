import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Search from './components/Search';
import Header from './components/Header';
import Watch from './components/Watch';
import SideWatch from './components/SideWatch';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
   <Router>
   <Header/>
   <Switch>
   <Route path="/watch/:id">
    <div className='watch--container'>
       <Watch />
       <SideWatch />
       </div>
       </Route>
      <Route path="/search/:searchTerm">
      <div className='container'>
      <Sidebar/>
       <Search />
       </div>
      </Route>
      <Route path="/">
      <div className='container'>
      <Sidebar/>
      <Main />
      </div>
      </Route>
    </Switch>
   </Router>
      </div>
  
  
  );
}

export default App;
