import React from 'react';
import './App.css';
import Home from "./Pages/Home/Home"
import Rooms from "./Pages/Rooms/Rooms"
import SingleRoom from "./Pages/SingleRoom/SingleRoom";
import Error from "./Pages/Error/Error";

import {Route,Switch} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/"><Home/></Route>
    <Route exact path="/rooms/"><Rooms/></Route>
    <Route exact path="/rooms/:slug"><SingleRoom/></Route>
    <Route> <Error/> </Route>
    </Switch>
    </>
  );
}

export default App;
