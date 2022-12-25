
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
// import './AddUser.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Login = () => {
//   const [user , setUser] = useState('');
  const auth = useAuth();

  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
     
  }, []);

  const formik = useFormik({
      initialValues: {
          email: '',
          password: ''
      },
      validate: (data) => {
          let errors = {};

          if (!data.email) {
              errors.email = 'Email is required.';
          }
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
              errors.email = 'Invalid email address. E.g. example@email.com';
          }

          if (!data.password) {
              errors.password = 'Password is required.';
          }

          return errors;
      },
      onSubmit: (data) => {
            setFormData(data);
            console.log(data.email);
            //setUser(data.email); 
            auth.login(data.email);
            setShowMessage(true);
            formik.resetForm();
            navigate('/dashboard');
          
      }
  });

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
      return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
      <React.Fragment>
          <Divider />
          <p className="mt-2">Suggestions</p>
          <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
          </ul>
      </React.Fragment>
  );

  return (
      <div className="form-demo">
          <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
              <div className="flex align-items-center flex-column pt-6 px-3">
                  <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                  <h5>Login Successful!</h5>
              </div>
          </Dialog>

          <div className="flex justify-content-center">
              <div className="card">
                  <h3 className="text-center">Add New User</h3>
                  <form onSubmit={formik.handleSubmit} className="p-fluid">
                      <div className="field">
                          <span className="p-float-label p-input-icon-right">
                              <i className="pi pi-envelope" />
                              <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                              <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                          </span>
                          {getFormErrorMessage('email')}
                      </div>
                      <div className="field">
                          <span className="p-float-label">
                              <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                                  className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                              <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
                          </span>
                          {getFormErrorMessage('password')}
                      </div>

                      <Button type="submit" label="Login" className="mt-2" />
                  </form>
              </div>
          </div>
      </div>
  );
}
   

export default Login;
