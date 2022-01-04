import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Blogs from './components/Blogs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddPost from './components/Post';
import BlogView from './components/BlogView';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
          
           <div className="container">
            <Switch>
             <Route exact path="/"><Blogs setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/></Route> 
   
              <Route exact path="/write"><NavBar setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/login"><Login setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
    <Route exact path="/signup"><SignUp/></Route> 
              
              <Route exact path="/create"><AddPost/></Route> 
              
<Route path="/article/:tag" children={<BlogView />} />
            </Switch>
          </div>
          
      
        </Router>
      </div>
    )
 
}

export default App;