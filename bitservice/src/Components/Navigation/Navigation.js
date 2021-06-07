import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';


const navigation = props => (
    <div className="nav">
        
        <div className="nav__text">
            <h1>Bitdefender</h1>
        </div>

        <div className="nav__links">
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/addIP">Add IP</NavLink>
            </li>
            <li>
                <NavLink to="/getIP">Get IP</NavLink>
            </li>
            <li>
                <NavLink to="/updateIP">Update IP</NavLink>
            </li>
            <li>
                <NavLink to="/deleteIP">Delete IP</NavLink>
            </li>
        </ul>
        </div>
    </div>
);

export default navigation;