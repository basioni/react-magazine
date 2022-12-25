import React from "react";
import { Menubar } from 'primereact/menubar';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from "./context/AuthContext";

const Menu = () => {
   const navigate = useNavigate();
   const auth = useAuth();
  // Menu Items
const menuItems = [
   {
      label:'Dashboard',
      icon:'pi pi-home',
      command: ()=>{ navigate('/dashboard'); }
   },
   {
     label:'Calendar',
     icon:'pi pi-fw pi-calendar',
  },
   {
      label:'Users',
      icon:'pi pi-fw pi-user',
      items:[
         {
             icon:'pi pi-fw pi-bars',
             label:'View Users',
             command: ()=>{ navigate('/users'); }
         },
         {
            label:'Add User',
            icon:'pi pi-fw pi-user-plus',
            command: ()=>{ navigate('/adduser'); }
         }
      ]
   },
  {
     label:'Events',
     icon:'pi pi-fw pi-calendar',
     items:[
        {
           label:'List Events',
           icon:'pi pi-fw pi-calendar',
        },
        {
           label:'Archieve',
           icon:'pi pi-fw pi-calendar-plus',
        }
     ]
  }
];
const loggedOutMenuItems = [
   {
      label:'Login',
      icon:'pi pi-home',
      command: ()=>{ navigate('/login'); }
   }
];
  return (
   !auth.user ?
   (<Menubar model={loggedOutMenuItems} />)
   :
   (<Menubar model={menuItems} />)
  )
};

export default Menu;