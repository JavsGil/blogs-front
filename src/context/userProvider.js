import React, { useState } from 'react';
import UserContext from './userContext';
import SessionProvider from '../provider/SessionProvider';

const UserProvider = ({ children }) => {
  

  const [ userDetails, setUserDetails ] = useState({
    user: {},
    token: null,
   
});
 const obj = {
    ...userDetails,
    setUserDetails
  }

  return (
    <UserContext.Provider value={obj}>
      <SessionProvider />
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider