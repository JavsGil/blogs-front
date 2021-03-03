import React, { useContext } from 'react';
import Loader from '../global/Loader';
import Login from '../../components/Login';
import UserContext from '../../context/userContext';

const Perfil =()=>  {
    
    const user = useContext(UserContext);
    if (!user.token) {
        return (
            <>
                <Loader />
                <Login />
               
            </>
        );
    }
        return ( <h2>Perfil Page</h2> );
  
}
 
export default Perfil;