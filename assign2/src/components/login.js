import React from 'react';
import './component.css';
import { useEffect, useState } from 'react';

// function submit(){
//     const [value, setValue]= useState('login here');
// }

function Login(){
    const [userLoggedIn, setUserLoggedIn]= useState(false);
    const [value, setValue]= useState('Login');
    const [hidden, setHidden] =useState(true);
    return(
        <div className="login">
        <form className="log">
            <h2 className="title">
                LOGIN
            </h2>
            <div className="form-content">
            <label>Username:</label><br/>
            <input type="text" maxLength="25"/><br/>
            <label>Password: </label><br/>
            <input type="password"/>
            <br/><br/>
            <button hidden={hidden} onClick={()=>setHidden(true)}>Logout</button>
            {hidden===true && <input type="button" onClick={() => setHidden(false)} value={value}/>}
            <hr/>
            </div>
        </form>
        
        </div>
    );
}

export default Login;