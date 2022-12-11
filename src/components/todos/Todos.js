import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
    

function Todos(){
    
    const { user, isAuthenticated} = useAuth0();

    useEffect(()=>{
        fetchItems();
    },[])    

    const [items, setItems] = useState([]);
    
    
    const fetchItems = async() => {
        const data = await fetch("/viewTodos");
        const items = await data.json();
        setItems(items);
       
        const script = document.createElement("script");
        script.src = 'js/tablescripts.js';
        script.async = true;
        document.body.appendChild(script);
        
    }
    
    


    return (
        <div class="content-wrapper ">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                            <div class="container-fluid">
                                <div class="row mb-2 ">
                                <div class="col-sm-8">
                                <h1 class="m-0 float-left"> Todos <small>List</small></h1>
                                </div>
                                <div class="col-sm-4 float-sm-right">
                                    
                                </div>
                                </div>
                            </div>
                            <div class="container-fluid">
                                <div class="row mb-2 ">
                                    <div class="col-sm-12 float-sm-right">
                                        <div class="float-right">   
                                        <Link to="/AddTodo"><button type="button" class="btn btn-primary"><i class="fas fa-plus-circle"></i> Add Todo</button></Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="card">
                            <div class="card-header">
                                <div class="float-left">
                                <h3>Todos List</h3>
                                </div>
                            </div>
                            <div class="card-body float-left">
                                
                                <table id="example3" class="table table-bordered table-striped ">
                                <thead>
                                <tr>
                                    <th width="150">Actions</th>
                                    <th width="100">ToDo ID</th>
                                    <th>ToDo Title</th>
                                   
                                </tr>
                                </thead>
                                <tbody>
                                {
                                        items.map(item => (
                                            <tr>
                                            <td> 
                                                <div class="btn-group">
                                                <form method="GET" action="/TodoView"><input type="hidden" name="todoID" value={item.todoID}/><button type="submit" class="btn btn-outline-info"><i class="far fa-eye"></i></button></form>
                                                <form method="GET" action="/TodoEditView"><input type="hidden" name="todoID" value={item.todoID}/><button class="btn btn-outline-warning"><i class="fas fa-edit"></i></button></form>
                                                <form method="POST" action="/deleteTodo"><input type="hidden" name="deleteTodo" value={item.todoID}/><button type="submit" class="btn btn-outline-danger " ><i class="fas fa-trash-alt"></i></button></form>
                                                </div>
                                            </td>
                                            <td>{item.todoID}</td>
                                            <td>{item.todoTitle}</td>
                                            </tr>
                                        ))
                                }         
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th width="150">Actions</th>
                                    <th width="100">ToDo ID</th>
                                    <th>ToDo Title</th>
                                </tr>
                                </tfoot>
                                </table>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}


export default Todos;