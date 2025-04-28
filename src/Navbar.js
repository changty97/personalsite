import './App.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = (props) => (
    <div>
        <div className="image-nav">
            <img alt="Tyler Headshot" className="circular--square center" src="/headshot.png" />
            <h1 className="center">Tyler Chang</h1>
        </div>
        <div>{props.children}</div>
    </div>
);

export default Navbar;