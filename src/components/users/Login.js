
import { useEffect, useState , useRef , useContext} from 'react';
import React from 'react';
import  { Redirect } from 'react-router-dom';

import { AuthProvider } from './AuthProvider';
import { InputText } from 'primereact/inputtext';

import { Password } from 'primereact/password';
 
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import Dashboard from '../Dashboard';

const Login = () => {
 const {token , setToken} = useContext(AuthProvider);
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
   
  //  /setAuth({user, pwd });
    
    // console.log(user, pwd );
    try {
      // const response = await axios.post('https://jsonplaceholder.typicode.com/users', 
      //   JSON.stringify({user, pwd }),
      //   {
      //     headers: {'Content-Type': 'application/json'},
      //     withCredentials: true
      //   }
      // );
      
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await data.json();
      setToken(user);
      // console.log(JSON.stringify(response.length));
      //setAuth({user, pwd });
      //setUser('');
      //setPwd('');
      //setSuccess(true);
      // console.log(success);
      // tok.name = user;
      //console.log(token);

      // window.location.replace('/dashboard');

    } catch(err) {
      setErrorMessage('Error');
      // console.log(errorMessage);
    }
     
    //setAuth({user, pwd });
    // // console.log(auth);
    // setUser('');
    // setPwd('');
    // setSuccess(true);

    
  }


  return (
      <div className="flex flex-column md:flex-row p-jc-center">
        <Card >
          <h5>Login to your account:</h5>
          {(loginToken)=> <div>aa{loginToken.name}</div>}
          

          <p ref={errorRef} className={errorMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errorMessage}</p>
          <form onSubmit={handleLogin} >
          
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

        </form>

        </Card>
      </div>
  );
}
   

export default Login;
