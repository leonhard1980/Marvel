import React from "react";
import './App.css';
import TopMenu from "./components/Topmenu";
import {Switch, Route, } from "react-router-dom";
import FindYourHero from "./pages/FindYourHero";
import Register from "./pages/Register";
import TopTen from "./pages/TopTen";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import WhichHeroInComic from "./pages/Comic";
import WhoNeverMet from "./pages/WhoNeverMet";
import Login from "./pages/Login";


function App() {
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
           <Route  path="/whonevermet">
               <WhoNeverMet />
           </Route>
           <Route  path="/whichheroincomic">
               <WhichHeroInComic />
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

           <Route exact path="/">
               <Home />
           </Route>

       </Switch>


   </>
  );
}

export default App;
