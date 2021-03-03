import React from 'react';
import { useForm } from '../hooks/useFormLogin';
import API from '../API/auth';
import { Link,useHistory } from 'react-router-dom';

import '../css/Login.css';

 const Login = () => {

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;
    let history = useHistory();

    const handleLogin = (e) => {
       try {
          e.preventDefault();
          API.login({
           ...formValues
          }).then(res => {
                
              const token = res.data.data.token;
              const user = res.data.data.user;
              
              localStorage.setItem('token',token);
              localStorage.setItem('user',JSON.stringify(user));
              alert(`Bienvenido ${user.name}`);
              history.push("/home");
         
            })
          
       } catch (e) {
         console.warn(e);
       }
    }
    return (
        <>

<div className="App">
      <header className="App-header">
        <div>          
            <div className="card card-group opacidad">
                     <div className="card-header card-img text-center">
                     Blogs
                     </div>
                  <div className="container-fluid">
                     <form onSubmit={handleLogin}>
                        <div className="form-group">
                           <label><h5>Email</h5></label>
                           <input 
                           type="email" 
                           name="email" 
                           className="form-control" 
                           onChange={handleInputChange}  
                           placeholder="Ingrese email" 
                           autoComplete="off"
                           />
                        </div>
   
                        <div className="form-group">
                           <label><h5>Password</h5></label>
                           <input 
                           type="password" 
                           name="password" 
                           className="form-control" 
                           onChange={handleInputChange} 
                           placeholder="Ingrese contraseña"
                           autoComplete="off"
                           />
                        </div>
   
                        <div className="button-loggin">
                           <button  
                              type="submit" 
                              className="btn btn-primary">Iniciar Sesion
                            </button>
                           <Link 
                              to="/register" 
                              className="App-link">
                              <h5 className="my-3">Registrate</h5>
                           </Link>
                           
                        </div>
                    </form>
                  </div>
            </div>
        </div>
      </header>
    </div>
           
        </>
    );
}

export default Login;
