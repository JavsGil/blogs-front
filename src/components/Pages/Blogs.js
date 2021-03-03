import React, { useContext } from 'react';
import Loader from '../global/Loader';
import Login from '../Login';
import UserContext from '../../context/userContext';

const Blogs = () => {

    const user = useContext(UserContext);
    if (user.token) {
        return ( 
            <div> 
                <h2>Blogs Page</h2>
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
 
export default Blogs;