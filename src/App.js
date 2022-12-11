import React from "react";
import {useState} from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/users/Login';
// import NoPage from "./components/NoPage";
import logo from './logo.svg';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

import "primeflex/primeflex.css";
import { StyleClass } from 'primereact/styleclass';

const App = () => {
    const isUserLoggedIn = false;

    return (
      <div>
         <Menu />
         { isUserLoggedIn ? 
         (<div>
            <Home />
         </div>
          ):
         (
            <Login />
         )
         }        
      </div>
    );
  }

export default App;
