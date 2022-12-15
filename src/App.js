import React, { useContext } from "react";
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import ListUsers from './components/users/ListUsers';
import Login from './components/users/Login';
import NoPage from "./components/NoPage";
import logo from './logo.svg';

// import AuthContext from "./components/users/AuthProvider";
import { AuthProvider } from "./components/users/AuthProvider";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

import "primeflex/primeflex.css";
import { StyleClass } from 'primereact/styleclass';

// export const UserContext = React.createContext();
const App = () => { 
  const [token, setToken] = useState(null);
   const isUserLoggedIn = false;
   // isUserLoggedIn = true;
   function checkLogin(inputToken){
    if (inputToken == null){
    return false;
    }else{
    return true;
    } 
   }

    //console.log(user);
    return (
      <div>
         <AuthProvider.Provider value={{token, setToken}} >
         {checkLogin(token) ? 
         (<div>
           
            <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/">
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="users" element={<ListUsers />} />
                  <Route path="*" element={<NoPage />} />
                </Route >
            </Routes>
          </BrowserRouter>
         </div>
          ):
         (
            <div>
            <Login />
            </div>
         )
         }
      </AuthProvider.Provider>        
      </div>
      
    );
  }

export default App;
