import React, { useContext } from 'react';

import Nav from './Layout/Navbar';
import Loader from '../components/global/Loader';
import UserContext from '../context/userContext';
import Login from '../components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const user = useContext(UserContext);
    if (user.token) {

        return (
            <div>
                <Nav />
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

export default Home;