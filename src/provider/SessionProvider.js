import React, { useEffect,useContext } from 'react';
import UserContext  from '../context/userContext';


const SessionProvider = (props) => {

  const { setUserDetails } = useContext(UserContext);

   useEffect(()=>{
        function verifySession(){
			
					const veryfyInterval = setInterval(()=>{
					
                        // check session
						const result = localStorage.getItem('token');
						const user =  JSON.parse(localStorage.getItem('user'));		
						if(result){
							
							// 	session start
							setUserDetails({
									token : result,
									user: {
										user: user
									}
								})
							clearInterval(veryfyInterval);
						}
					},3000)
            }
    verifySession();
	},[setUserDetails]);
	
    return (false);
}

export default SessionProvider
