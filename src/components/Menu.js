import React from "react";
import { Menubar } from 'primereact/menubar';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from "./context/AuthContext";

import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge'
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
     command: ()=>{ navigate('/calendar'); }
   },
  {
     label:'Tasks',
     icon:'pi pi-fw pi-calendar',
     items:[
        {
           label:'All Tasks',
           icon:'pi pi-fw pi-calendar',
        },
        {
           label:'Add New',
           icon:'pi pi-fw pi-calendar-plus',
        }
     ]
  },
   {
      label:'Users',
      icon:'pi pi-fw pi-users',
      items:[
         {
             icon:'pi pi-fw pi-users',
             label:'All Users',
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
     label:
     (auth.user),
     icon:'pi pi-fw pi-user',
     items:[
        {
            icon:'pi pi-fw pi-bars',
            label:'Profile',
            command: ()=>{ navigate('/users'); }
        },
        {
           label:'Logout',
           icon:'pi pi-fw pi-user-plus',
           command: ()=>{ navigate('/adduser'); }
        }
     ]
  }
];
const loggedOutMenuItems = [
   {
         icon:'pi pi-fw pi-bars',
         label:'Login',
         command: ()=>{ navigate('/login'); }
   },
   {
      label:'Register',
      icon:'pi pi-fw pi-user-plus',
      command: ()=>{ navigate('/register'); }
   }
];
  return (
   !auth.user ?
   (<Menubar model={loggedOutMenuItems} 
      end={<div>end</div>}
   />)
   :
   (<Menubar model={menuItems }   
      end={<div>end</div>}
   />)
  )
};

export default Menu;