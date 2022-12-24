import React, { useContext } from "react";
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import ListUsers from './components/users/ListUsers';
import NoPage from "./components/NoPage";
import logo from './logo.svg';


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

import "primeflex/primeflex.css";
import { StyleClass } from 'primereact/styleclass';

const Page = () => { 
   
    return (
      <div>
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
         
      
    );
  }

export default Page;
