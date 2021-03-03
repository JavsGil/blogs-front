import React ,{useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import { Nav, Navbar } from 'react-bootstrap';

import userContext from '../../context/userContext';
import Usuarios from '../Pages/Usuarios';
import Blogs from '../Pages/Blogs';
import Categories from '../Pages/Categories';
import Perfil from '../Pages/Perfil';
// import Login from '../../components/Login';
import { useHistory } from 'react-router-dom';


const Menu = () => {
  
  const {user} = useContext(userContext);
 
  const { setUserDetails } = useContext(userContext);
  let history = useHistory();

    const cerrarSesion = () => {
        setUserDetails({
            user: ()=>({})
          })
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        history.push("/");
    }
    
    if(user.user.type_user == 1 ){
        return (
            <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="">Blogs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                      
                            <Link to="usuarios">Usuarios</Link>
                        
                            <Link to="blogs" className="ml-1">Blogs</Link>

                            <Link to="categories" className="ml-1">Categorias</Link>
                        
                        </Nav>
                        <Nav>
                            <Link to="/perfil" className="my-2">Perfil</Link>
                            <Nav.Link onClick={cerrarSesion}>
                               Cerrar Sesion
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/blogs">
                        <Blogs />
                    </Route>
                    <Route path="/usuarios">
                        <Usuarios />
                    </Route> 
                    <Route path="/categories">
                        <Categories />
                    </Route>
                    <Route path="/perfil">
                        <Perfil />
                    </Route>
                </Switch>
            </div>
        </Router>
        );

    }else if(user.user.type_user ==2){
        return (
            <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="">Blogs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                      
                            <Link to="categories" className="ml-1">Categorias</Link>
                            <Link to="blogs" className="ml-1">Blogs</Link>
                        
                        </Nav>
                        <Nav>
                            <Link to="/perfil" className="my-2">Perfil</Link>
                            <Nav.Link onClick={cerrarSesion}>
                               Cerrar Sesion
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/blogs">
                        <Blogs />
                    </Route>
                    <Route path="/usuarios">
                        <Usuarios />
                    </Route>
                    <Route path="/categories">
                        <Categories />
                    </Route>
                    <Route path="/perfil">
                        <Perfil />
                    </Route>
                </Switch>
            </div>
        </Router>
        );
    }
    else{

        return  <Redirect to='/'  />
    }

};

export default Menu;