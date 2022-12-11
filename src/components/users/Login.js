
import {useEffect, useState , useRef} from 'react';
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';

import { Password } from 'primereact/password';
 
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Login = () => {
  const userRef = useRef(); 
  const errorRef = useRef();
  
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(()=>{
    seterrorMessage('');
  },[user, pwd])


  const handleLogin = async (e)=>{
    e.preventDefault();
    console.log(user, pwd);
    
  }


  return (
      <div>
        <div className="grid">
            <div className="col"></div>
            <div className="col">
              <Card>
                <h5>Login to your account:</h5>
                <p ref={errorRef} className={errorMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errorMessage}</p>
                <form onSubmit={handleLogin} >
                <div className="grid ">
                    <div className="col-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="Username" id="user" value={user} onChange={(e) => setUser(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-lock"></i>
                            </span>
                            <Password id="password"  placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} required/>
 
                        </div>
                    </div>
                    <div className="col-12">
                    <Button label="Login"/>
                    </div>
                </div>

              </form>
              </Card>
            </div>
            <div className="col"></div>
        </div>
      </div>
  );
}
   

export default Login;