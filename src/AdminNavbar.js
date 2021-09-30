import './App.css';
import React from "react";
import {NavLink} from "react-router-dom";

const AdminNavbar = (props) => (
    <div>
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
        <hr></hr>
        <div>{props.children}</div>
    </div>
);

export default AdminNavbar;