import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';
import Perfil from '../components/Pages/Perfil';
import Blogs from '../components/Pages/Blogs';
import Categories from '../components/Pages/Categories';
import Usuarios from '../components/Pages/Usuarios';
import UserProvider from '../context//userProvider';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <UserProvider>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/perfil" component={Perfil}/>
        <Route exact path="/blogs" component={Blogs}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/usuarios" component={Usuarios}/>
        </UserProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
