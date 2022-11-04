import React, { useContext } from "react";
import { AuthContext } from './context/AuthContext';
import './App.css';
import TopMenu from "./components/Topmenu";
import {Switch, Route, Redirect} from "react-router-dom";
import FindYourHero from "./pages/findyourhero/FindYourHero";
import Register from "./pages/register/Register";
import TopTen from "./pages/topten/TopTen";
import AboutUs from "./pages/aboutus/AboutUs";
import Home from "./pages/home/Home";
import Series from "./pages/series/Series";
import SearchHero from "./pages/searchHero/SearchHero";
import Login from "./pages/login/Login";
import Profile from './components/profile/Profile';

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
   <>
       <TopMenu/>
       <Switch>
           <Route  path="/topten">
               <TopTen />
           </Route>
           <Route path="/findyourhero/:blogId">
               <FindYourHero />
           </Route>
           <Route  path="/yourhero">
               <SearchHero />
           </Route>

           <Route path="/register">
               <Register />
           </Route>
           <Route path="/login">
               <Login />
           </Route>
           <Route path="/aboutus">
               <AboutUs />
           </Route>
           <Route  path="/series">
               <Series />
               </Route>
           <Route path="/profile">
               {isAuth ? <Profile /> : <Redirect to="/" />}
           </Route>
           <Route exact path="/">
               <Home />
           </Route>
       </Switch>
   </>
  );
}

export default App;
