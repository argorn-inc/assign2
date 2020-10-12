import React from 'react';
import './component.css';

function Home(){
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
            <input type="submit" value="Log In Here"/>
            <hr/>
            </div>
        </form>
        
        </div>
    );
}

export default Home;