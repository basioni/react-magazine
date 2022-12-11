import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
    

function TodoEditView(){
    
    

    useEffect(()=>{
        fetchItems();
    },[])    

    const [items, setItems] = useState([]);
    const [inputs, setInputs] = useState({});
    
    const fetchItems = async() => {   
      const queryParams = new URLSearchParams(window.location.search);
       const todoid = queryParams.get('todoID');  
       const data = await fetch("/getTodo?todoID="+todoid);
        const items = await data.json();
        setItems(items);
        
    }
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name] : value}))
    }
  
    const handleSubmit = (event) => {
      //event.preventDefault();
    }


    return (
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container">
                    <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="float-left">Edit Todo</h1>
                    </div>
                    </div>
                </div>
            </div>

    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header p-2">
                <h4 class="float-left">Todo Details</h4>
              </div>
              {
                items.map(item => (
                <div class="card-body">
                  <form method="POST" action="/updateTodo"  onSubmit={handleSubmit}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                              <div class="form-group ">
                                  <label for="todoID" class=" float-left">ToDo ID: </label>
                                  <input type="text" id="todoID" name="todoID" class="form-control" value={inputs.todoID || item.todoID || "" } onChange={handleChange} />
                              </div>
                              <div class="form-group">
                                  <label for="todoTitle" class=" float-left">ToDO Title:</label>
                                  <input type="text" id="todoTitle" name="todoTitle" class="form-control" value={inputs.todoTitle || item.todoTitle || ""} onChange={handleChange} />
                              </div>
                              <div class="form-group ">
                                    <label for="todoDescription" class=" float-left">Todo Description:</label>
                                    <textarea id="todoDescription" name="todoDescription" class="form-control " onChange={handleChange}>{inputs.todoDescription || item.todoDescription || ""}</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <Link to="/Todos"><button class="btn btn-secondary float-left" >Cancel</button></Link>
                                <input type="submit" value="Update" class="btn btn-primary float-right"/>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
               ))
              }      
              <div class="card-footer float-left">
                <Link to="/Todos"><button class="btn btn-default float-left"> &laquo; Back To Todos</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
    
}


export default TodoEditView;