import React from 'react';
import { useForm } from '../hooks/useFormLogin';
import API from '../API/auth';
import { Link, useHistory } from 'react-router-dom';

import '../css/Login.css';

const Register = () => {

   const [formValues, handleInputChange] = useForm({
      name: '',
      email: '',
      number_mobile: '',
      type_user : '',
      password: ''
   });

   const { name, email,number_mobile,type_user, password } = formValues;
   let history = useHistory();

   const handleSubmit = (e) => {
      try {
         e.preventDefault();

         API.register({
            ...formValues
         })
            .then((res) => {
               if(res.data.data){
                  const user = res.data.data
                  alert(`Registro exitoso ${user.name}`);
                  history.push("/");
               }

            });
      } catch (e) {
         console.warn(e);
      }
   }
   return (
      <div className="App">
         <header className="App-header">
            <div>
               <div className="card card-group opacidad">
                  <div className="card-header card-img text-center">
                     Registrate
                     </div>
                  <div className="container-fluid">
                     <form onSubmit={handleSubmit}>
                        <div className="form-group">
                           <label><h5>Nombre</h5></label>
                           <input
                              type="text"
                              name="name"
                              className="form-control"
                              onChange={handleInputChange}
                              autoComplete="off"
                              placeholder="Ingrese su nombre"
                           />
                        </div>

                        <div className="form-group">
                           <label><h5>Email</h5></label>
                           <input
                              type="email"
                              name="email"
                              className="form-control"
                              onChange={handleInputChange}
                              autoComplete="off"
                              placeholder="Ingrese su email"
                           />
                        </div>

                        <div className="form-group">
                           <label><h5>Telefono</h5></label>
                           <input
                              type="text"
                              name="number_mobile"
                              className="form-control"
                              onChange={handleInputChange}
                              autoComplete="off"
                              placeholder="Ingrese su Tlf"
                           />
                        </div>

                        <div className="form-group">
                           <label><h5>Tipo Usuario</h5></label>
                           <select 
                           className="browser-default custom-select"
                           name="type_user"
                           onChange={handleInputChange}
                           >
                              <option>Seleccione</option>
                              <option value="1">Administrador</option>
                              <option value="2">Usuario</option>
                           </select>
                        </div>

                        <div className="form-group">
                           <label><h5>Password</h5></label>
                           <input
                              type="password"
                              name="password"
                              className="form-control"
                              onChange={handleInputChange}
                              autoComplete="off"
                              placeholder="Ingrese su contraseña"
                           />
                        </div>

                        <div className="button-loggin">
                           <button type="submit" className="btn btn-primary">Registrate</button>
                           <Link to="/" className="App-link"><h5 className="my-3">Iniciar Session </h5></Link>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </header>
      </div>

   );

}

export default Register;