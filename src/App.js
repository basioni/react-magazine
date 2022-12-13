import React, { useContext } from "react";
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/users/Login';
import NoPage from "./components/NoPage";
import logo from './logo.svg';

import AuthContext from "./components/users/AuthProvider";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

import "primeflex/primeflex.css";
import { StyleClass } from 'primereact/styleclass';

const App = () => {
   const {user} = useContext(AuthContext) ;
   const isUserLoggedIn = false;
   // isUserLoggedIn = true;
   if (user)
   {
      isUserLoggedIn = true;
     
   }
   console.log(AuthContext.__currentValue);
    return (
      <div>
         
         { isUserLoggedIn ? 
         (<div>
           
            <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="Home" element={<Home />} />
                  <Route path="*" element={<NoPage />} />
                </Route >
            </Routes>
          </BrowserRouter>
           {user}
         </div>
          ):
         (
            <div>
                 {user}
            <Login />
            </div>
         )
         }        
      </div>
    );
  }

export default App;
