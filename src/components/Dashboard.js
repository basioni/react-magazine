import React, { useState } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { BreadCrumb } from 'primereact/breadcrumb';
import { AuthProvider } from './users/AuthProvider';

// Load Dashboard Widgets
import UsersRegisteredWidget from './widgets/UsersRegisteredWidget';
import EventsStatusWidget from './widgets/EventsStatusWidget.js';
import EventsInsightsWidget from './widgets/EventsInsightsWidget';

// Load Dashboards CSS
import './dashboard.css';

const Dashboard = () => {
    //const {token , setToken} = useContext(AuthProvider);
    // Set BreadCrum options
    const items = [
        { label: 'Dashboard' }
    ];
    
    const home = { icon: 'pi pi-home', url: 'http://localhost:3000' }
 
   

    return (
        <div className="container">
            <div className="col">
            <BreadCrumb model={items} home={home}/>
            </div>
            <div className="col">
                <div className="grid">
                    <div className="col-4 sm-12">
                        <Fieldset legend="Events Insights">
                        <EventsInsightsWidget />                  
                        </Fieldset>
                    </div>
                    <div className="col-4 sm-12">
                        <Fieldset legend="Registrations Insights">
                        <UsersRegisteredWidget />
                        </Fieldset>
                    </div>
                    <div className="col-4 sm-12">
                        <Fieldset legend="Events Status">
                        <EventsStatusWidget />
                        </Fieldset>
                    </div>
                `</div>

            </div>
        </div>
    );
};

export default Dashboard;