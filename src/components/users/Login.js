
import { useEffect, useState , useRef , useContext} from 'react';
import React, { Component } from 'react';
import AuthContext from './AuthProvider';
// import axios from '../api/axios';
import { InputText } from 'primereact/inputtext';

import { Password } from 'primereact/password';
 
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Login = () => {
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef(); 
  const errorRef = useRef();
  
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(()=>{
    setErrorMessage('');
  },[user, pwd])


  const handleLogin = async (e)=>{
    e.preventDefault();
    setAuth({user, pwd });
    
    console.log(user, pwd );
    try {
      // const response = await axios.post('http://localhost:3500', 
      //   JSON.stringify({user, pwd }),
      //   {
      //     headers: {'Content-Type': 'application/json'},
      //     withCredentials: true
      //   }
      // );
      // console.log(JSON.stringify(response));
      // setAuth({user, pwd });

    } catch(err) {
      setErrorMessage('Error');
      console.log('Error');
    }
     
    //setAuth({user, pwd });
    // console.log(auth);
    setUser('');
    setPwd('');
    setSuccess(true);

    
  }


  return (
      <div>
        <div className="grid">
            <div className="col"></div>
            <div className="col">
              <Card>
                <h5>Login to your account:</h5>
                {
                  user
                }
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
