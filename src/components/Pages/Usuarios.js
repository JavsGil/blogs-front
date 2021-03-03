import React, { useContext }from 'react';
import Loader from '../global/Loader';
import Login from '../../components/Login';
import UserContext from '../../context/userContext';

const Usuarios =()=> {
    
    const user = useContext(UserContext);
    if (user.token) {
        return ( 
            <div>
                <h2>Usuarios Page</h2>
            </div>  
        );
    }else{
        return (
            <>
               <Loader />
                <Login />
            </>
        );
    }
    
  
}
 
export default Usuarios;