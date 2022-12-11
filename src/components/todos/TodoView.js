import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
    

function TodoView(){
    
    

    useEffect(()=>{
        fetchItems();
    },[])    

    const [items, setItems] = useState([]);
    
    
    const fetchItems = async() => {   
      const queryParams = new URLSearchParams(window.location.search);
       const todoid = queryParams.get('todoID');  
       const data = await fetch("/getTodo?todoID="+todoid);
        const items = await data.json();
        setItems(items);
        
    }
    
    


    return (
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container">
                    <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="float-left">Todo Details</h1>
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
                  <div class="row">
                      <label class="col-sm-2 ">Todo ID:</label>
                      <div class="col-sm-10 ">
                        <p class="float-left">{item.todoID}</p>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 ">Todo Title:</label>
                      <div class="col-sm-10">
                        
                      <p class="float-left">{item.todoTitle}</p>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 ">Todo Description:</label>
                      <div class="col-sm-10">
                        
                      <p class="float-left">{item.todoDescription}</p>
                      </div>
                    </div>
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


export default TodoView;