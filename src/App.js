import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Blogs from './components/Blogs';
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
        <Switch>
          <Route exact path="/"><Blogs setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><Blogs setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><Blogs setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><Blogs setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><Blogs setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><Blogs setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><Blogs setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><Blogs setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;