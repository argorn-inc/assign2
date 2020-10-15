import React, {useState, useEffect} from 'react';
import './component.css';
import today from '../img/today.jpg';
import imageHeader from './bg.jpg';
import Login from './login';




function Home(){
    const [temperature,setTemperature ]= useState(29);
    useEffect(
    ()=> {
        document.title=`Temperature now: ${temperature}`;
    }
    );
    return(
        <div className="home">
            <div className="site-title">
                <label>Weather App</label>
            </div>
            <form className="home-form">
            <img className="today" src={today} alt="today"/><br/>
                <label className="temp" onClick ={()=> setTemperature(temperature+1)}><i>{temperature}&deg;C</i></label><br/>
                <input type="text" id="search" placeholder="Search Here"/>
            </form>
           <div className="home-content">
               {/* <image class="image" href="" alt="imageHeader"/>
               Nothing here  */}
                
           </div>
        
        </div>
        
    );
}

export default Home;