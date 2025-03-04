import './App.css';
import React from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Admin from "./Admin";

function App() {



  return (
    <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Project}/>
            <Route path="/admin" component={Admin}/>
          </div>
        </div>
        <footer> 
          <small>&copy; Copyright 2021, Tyler Chang. All Rights Reserved.</small> 
        </footer> 
    </HashRouter>
  );
}

export default App;
