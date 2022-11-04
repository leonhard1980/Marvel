import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/Marvel_Logo.svg.png';
import './Topmenu.css';
import {AuthContext} from "../context/AuthContext";

function TopMenu() {
    const { isAuth, logout } = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-container">

                <NavLink to="/aboutus"
                         activeClassName="active-link">
                    <img className="logo"
                         src={logo}
                         alt="logo" />
                </NavLink>
                {isAuth ?
                    <button
                        className="logoutbutton"
                        onClick={logout}>
                        logout
                    </button>
                    :
                    <div>

                    </div>
                }

                <ul>
                    <li className="links">
                        <NavLink to="/topten" activeClassName="active-link"> Top 100 </NavLink>
                    </li>

                    <li>
                        <NavLink to="/yourhero"
                                 activeClassName="active-link">Search your Hero</NavLink>

                    </li>
                    {isAuth ?
                        <li>
                            <NavLink to="/series"
                                     activeClassName="active-link"> Series </NavLink>

                        </li>
                        :
<div></div>
                    }


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
