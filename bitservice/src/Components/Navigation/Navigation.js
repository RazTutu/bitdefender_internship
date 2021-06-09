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
                <NavLink to="/ip">IP page</NavLink>
            </li>
        </ul>
        </div>
    </div>
);

export default navigation;