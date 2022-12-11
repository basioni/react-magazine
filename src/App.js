import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {InputText} from 'primereact/inputtext';

import { Card } from 'primereact/card';

import { Button } from 'primereact/button';

import { Menubar } from 'primereact/menubar';
 

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
const App = () => {
    const isUserLoggedIn = true;
    const [orderId, setorderId] = useState(0);
// Menu Items
const items = [
  {
     label:'Users',
     icon:'pi pi-fw pi-user',
     items:[
        {
          icon:'pi pi-fw pi-bars',
          label:'List'

        },
        {
           label:'New',
           icon:'pi pi-fw pi-user-plus',

        }
     ]
  },
  {
     label:'Events',
     icon:'pi pi-fw pi-calendar',
     items:[
        {
           label:'Edit',
           icon:'pi pi-fw pi-pencil',
           items:[
              {
                 label:'Save',
                 icon:'pi pi-fw pi-calendar-plus'
              },
              {
                 label:'Delete',
                 icon:'pi pi-fw pi-calendar-minus'
              },

           ]
        },
        {
           label:'Archieve',
           icon:'pi pi-fw pi-calendar-times',
           items:[
              {
                 label:'Remove',
                 icon:'pi pi-fw pi-calendar-minus'
              }
           ]
        }
     ]
  },
  {
     label:'Login',
     icon:'pi pi-fw pi-user-plus'
  },
  {
     label:'Logout',
     icon:'pi pi-fw pi-power-off'
  }
];


    return (
      <div className="App">

        <Menubar model={items}/>
        
        
        <img src={logo} className="App-logo" alt="logo" />
          { isUserLoggedIn ? 
          (<div>

            <h2> Hi user</h2>
<Card 
  footer={<img src={logo} className="App-logo" alt="logo" />} 
  header={<h2>Dashboard</h2>}>
    <span>
    <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
    <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
</span>
<InputText value={orderId} onChange={(e) => setorderId(e.target.value)} />
</Card>
            </div>
          ):
          (
            <h2> Login</h2>
          )
            }
      </div>
    );
  }

export default App;
