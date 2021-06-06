import './App.css';
import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Project from "./Project";

function App() {
  return (
    <HashRouter>
        <div>
          <div className="image-nav">
            <img alt="Tyler Headshot" className="circular--square center" src="/headshot.png" />
            <h1 className="center">Tyler Chang</h1>
          </div>
          <hr></hr>
          <div className="center">
            <ul className="topnav">
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/resume">RESUME</NavLink></li>
              <li><NavLink to="/projects">PROJECTS</NavLink></li>
              <li><a href="https://github.com/changty97" className="fa fa-github"> </a></li>
              <li><a href="https://www.linkedin.com/in/tyler-chang" className="fa fa-linkedin"> </a></li>
              <li><a href="mailto: chang.ty97@gmail.com" className="fa fa-google"> </a></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Project}/>
          </div>
        </div>
        <footer> 
          <small>&copy; Copyright 2021, Tyler Chang. All Rights Reserved.</small> 
        </footer> 
    </HashRouter>
  );
}

export default App;
