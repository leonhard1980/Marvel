import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/Marvel_Logo.svg.png';
import './Topmenu.css';

function TopMenu() {

    return (
        <nav>
            <div className="nav-container">
                <NavLink to="/aboutus"
                         activeClassName="active-link">
                    <img className="logo"
                         src={logo}
                         alt="logo" />
                </NavLink>

                <ul>
                    <li className="links">
                        <NavLink to="/topten" activeClassName="active-link"> Top 100 </NavLink>
                    </li>

                    <li>
                        <NavLink to="/yourhero"
                                 activeClassName="active-link">Search your Hero</NavLink>
                    </li>

                    <li>
                        <NavLink to="/series"
                                 activeClassName="active-link"> Series </NavLink>
                    </li>

                    <li>
                        <NavLink to="/login"
                                 activeClassName="active-link"> Login </NavLink>
                    </li>

                    <li>
                        <NavLink to="/register"
                                 activeClassName="active-link"> Register </NavLink>
                    </li>

                </ul>


            </div>

        </nav>
    );
}

export default TopMenu;
