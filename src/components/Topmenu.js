import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/Marvel_Logo.svg.png';
import './Topmenu.css';

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                <NavLink to="/"
                         activeClassName="active-link">
                    <img className="plaatje"
                         src={logo}
                         alt="logo" />
                </NavLink>

                <ul>
                    <li className="links">
                        <NavLink to="/topten"
                                 activeClassName="active-link"> Top 100 </NavLink>
                    </li>

                    <li>
                        <NavLink to="/findyourhero"
                                 activeClassName="active-link"> Find Your Hero </NavLink>
                    </li>

                    <li>
                        <NavLink to="/whonevermet"
                                 activeClassName="active-link">They Never Met</NavLink>
                    </li>

                    <li>
                        <NavLink to="/whichheroincomic"
                                 activeClassName="active-link"> Comic </NavLink>
                    </li>

                    <li>
                        <NavLink to="/login"
                                 activeClassName="active-link"> Login </NavLink>
                    </li>

                    <li>
                        <NavLink to="/register"
                                 activeClassName="active-link"> Register </NavLink>
                    </li>

                    <li>
                        <NavLink to="/aboutus"
                                 activeClassName="active-link"> About Us </NavLink>
                    </li>


                </ul>


            </div>

        </nav>
    );
}

export default TopMenu;
