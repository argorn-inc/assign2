import React, {useState, useEffects} from 'react';
import Home from './homepage';


function Trial(){
    const [userLogin, setUserLogin] =useState('false');
    
       
    
    return(
       
        <>
        <p>User not logged in</p>
      {userLogin==='false' &&  <button onClick={()=> setUserLogin('true') } >Login</button>  }
      {userLogin==='true' &&  <button onClick={()=> setUserLogin('false') } >Logout</button>  } <br/>
        {/* <button onClick={()=> setUserLogin('false') }>{logbtn}</button><br/> */}
    <label >{userLogin}</label>
   
        </>
    );
}

export default Trial;