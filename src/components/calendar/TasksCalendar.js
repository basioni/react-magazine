import React, { useState , useContext } from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { BreadCrumb } from 'primereact/breadcrumb';

import { Calendar } from 'primereact/calendar';
 
// Load CSS
// import './.css';

// Import Authentication Token
import { useAuth } from '../context/AuthContext';
// import { Calendar } from 'primereact/calendar';
const TasksCalendar = () => {
    // Set BreadCrum options
    const auth = useAuth()

    const items = [
        { label: 'Dashboard' , label: 'Calendar' }
    ];
    
    const home = { icon: 'pi pi-home', url: 'http://localhost:3000' }
 
   

    return (
        <div className="container">
            <div className="col">
            <BreadCrumb model={items} home={home}/>
            </div>
            <div className="col">
                <div className="grid">
                   
                    <Calendar ></Calendar>
 
                </div>
            </div>
        </div>
    );
};

export default TasksCalendar;