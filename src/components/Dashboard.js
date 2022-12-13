import { Fieldset } from 'primereact/fieldset';
import { BreadCrumb } from 'primereact/breadcrumb';
import { PanelMenu } from 'primereact/panelmenu';
import './dashboard.css';

import React from "react";
const Home = () => {

    const items = [
        { label: 'Dashboard' }
    ];
    
    const home = { icon: 'pi pi-home', url: 'http://localhost:3000' }
 
    return (
        <div className="container">
            <div className="container">
            <BreadCrumb model={items} home={home}/>
            </div>
            <div className="container">
                <Fieldset legend="Recent Activity">
                    <div className="text-700 text-center">
                        <div className="text-900 font-bold text-5xl mb-3">Dashboard</div>
                        <div className="text-700 text-2xl mb-5">
                            Display a list of TODO items (each item must have a unique ID, title and description).
                        </div>
                    </div>
                </Fieldset>
            </div>
        </div>
    );
};

export default Home;