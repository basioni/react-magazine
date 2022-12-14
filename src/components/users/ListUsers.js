import React from "react";
import { useState, useEffect } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { ProductService } from '../api/ProductService';

import './ListUsers.css';
const ListUsers = () => {

       
    const breadcrumbsItems = [
        { label: 'Users' },
        { label: 'All Users' }
    ];
    
    const home = { icon: 'pi pi-home', url: 'http://localhost:3000' }
    
    const [posts , setPosts]= useState([]);

    useEffect(()=>{
        fetchUsers();
    },[])    
    
    
    const fetchUsers = async() => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const posts = await data.json();

        const readPosts = posts.map(usersFilter);
        
        setPosts(readPosts);
        //setPosts(posts.concat([{"actions" : "Edit - Delete"}]));
        console.log(readPosts);
 
        
    }
   
    function usersFilter(value, index, array){
        return value;
    }
    const [first, setFirst] = useState(1);

    return (
        <div className="container">
            <div className="container">
            <BreadCrumb model={breadcrumbsItems} home={home}/>
            </div>
            <div className="container" >
            <DataTable value={posts}  
            responsiveLayout= "scroll"
            paginatorTemplate="firstPageLink PrevPageLink NextPageLink CurrentPageReport RowsPerPageDrop"
            dataKey='user_id' 
            paginator 
            emptyMessage= "No Users Found"
            className='datable-responsive'
            currentPageReportTemplate='Showing {first} to {last} of {totalRecords} users'
            rows={12} 
            >
            <Column field="id" header="ID" sortable style={{ width: '5%' }}></Column>
            <Column field="username" header="Name" sortable  style={{ width: '15%' }}></Column>
            <Column field="username" header="Username" sortable style={{ width: '15%' }}></Column>
            <Column field="email" header="Email" sortable style={{ width: '15%' }}></Column>
            </DataTable>
            </div>
        </div>
    );
};

export default ListUsers;