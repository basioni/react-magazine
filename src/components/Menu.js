import React from "react";
import { Menubar } from 'primereact/menubar';
import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  // Menu Items
const menuItems = [
   {
      label:'Dashboard',
      icon:'pi pi-fw pi-user',
      command: ()=>{ window.location="/Home"; }
   },
   {
      label:'Users',
      icon:'pi pi-fw pi-user',
      items:[
         {
             icon:'pi pi-fw pi-bars',
             label:'List',
             command: ()=>{ window.location="/Home"; }
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
           menuItems:[
              {
                 label:'Remove',
                 icon:'pi pi-fw pi-calendar-minus'
              }
           ]
        }
     ]
  },
  {
    label:'Account',
    icon:'pi pi-fw pi-user',
    items:[
     {
      label:'Login',
      icon:'pi pi-fw pi-user-plus'
   },
   {
        label:'Register',
        icon:'pi pi-fw pi-user-plus',

     },
     {
      label:'Logout',
      icon:'pi pi-fw pi-power-off'

     }
    ]
 }
];
  return (
    <Menubar model={menuItems} />
    
  )
};

export default Menu;