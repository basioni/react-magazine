import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
    

function AddTodo(){
    
    const { user, isAuthenticated} = useAuth0();
    return (
    isAuthenticated && (
        <div class="content-wrapper">
            <div class="container">
                <div class="row mb-2 ">
                    <div class="col-sm-8 float-left">
                        <h1 class="float-left">Add New Todo</h1>
                    </div>
                </div>
            </div>
            <form method="POST" action="/addTodo">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                            <h3 class="card-title">Add ToDo</h3>
                            </div>
                            <div class="card-body ">
                            
                                <div class="form-group ">
                                    <label for="todoID" class=" float-left">ToDo ID:</label>
                                    <input type="text" id="roleID" name="todoID" class="form-control "/>
                                </div>
                                <div class="form-group ">
                                    <label for="roleName" class=" float-left">Todo Title:</label>
                                    <input type="text" id="roleName" name="todoTitle" class="form-control"/>
                                </div>
                                <div class="form-group ">
                                    <label for="todoDescription" class=" float-left">Todo Description:</label>
                                    <textarea id="todoDescription" name="todoDescription" class="form-control "></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <Link to="/roles"><button class="btn btn-secondary float-left" >Back to Todos</button></Link>
                        <input type="submit" value="Save" class="btn btn-primary float-right"/>
                    </div>
                </div>
            </div>
            
        </form>
      </div>
    )
    );
    
}


export default AddTodo;