
import { BreadCrumb } from 'primereact/breadcrumb';


import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';

 
import { Column } from 'primereact/column';
// import { ProductService } from '../api/ProductService';

import './ListUsers.css';

import React from "react";

const ListUsers = () => {

       
    const items = [
        { label: 'Users' },
        { label: 'All Users' }
    ];
    
    const home = { icon: 'pi pi-home', url: 'http://localhost:3000' }
   
    const products = [
        {"name" : 'Ahmed',"user_id" : '1',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Mohamed',"user_id" : '2',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'Mohamed@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Ali',"user_id" : '3',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Hassan',"user_id" : '4',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'Hassan@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Ramy',"user_id" : '5',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Basem',"user_id" : '6',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Mahmoud',"user_id" : '7',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Kareem',"user_id" : '8',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Aliaa',"user_id" : '9',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Essam',"user_id" : '10',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Sayed',"user_id" : '11',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Gomaa',"user_id" : '12',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Saad',"user_id" : '13',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Talaat',"user_id" : '14',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Samy',"user_id" : '15',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Goda',"user_id" : '16',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Fathy',"user_id" : '17',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Basioni',"user_id" : '18',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Amir',"user_id" : '19',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Hany',"user_id" : '20',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Shawky',"user_id" : '21',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Baher',"user_id" : '22',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Razan',"user_id" : '23',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
        {"name" : 'Yahaa',"user_id" : '24',"role" : 'aaa',"username" : 'ahmed_basioni',"user_email" : 'ahmed_basioni@ahmedbasioni.com',"actions" : 'Edit - Delete'},
    ];
    const [first, setFirst] = useState(1);

    return (
        <div className="container">
            <div className="container">
            <BreadCrumb model={items} home={home}/>
            </div>
            <div className="container" >
            <DataTable value={products}  
            responsiveLayout= "scroll"
            paginatorTemplate="firstPageLink PrevPageLink NextPageLink CurrentPageReport RowsPerPageDrop"
            dataKey='user_id' 
            paginator 
            emptyMessage= "No Users Found"
            className='datable-responsive'
            currentPageReportTemplate='Showing {first} to {last} of {totalRecords} users'
            rows={12} 
            >
            <Column field="user_id" header="ID" sortable style={{ width: '5%' }}></Column>
            <Column field="name" header="Name" sortable  style={{ width: '15%' }}></Column>
            <Column field="username" header="Username" sortable style={{ width: '15%' }}></Column>
            <Column field="user_email" header="Email" sortable style={{ width: '15%' }}></Column>
            <Column field="role" header="Role" sortable style={{ width: '10%' }}></Column>
            <Column field="actions" header="Actions"></Column>
        </DataTable>
        
 
            </div>
        </div>
    );
};

export default ListUsers;