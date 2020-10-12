import React from 'react';
// import logo from './logo.svg'
import './App.css';
import Login from './components/login';
import Home from './components/homepage';
import InfoArea from './components/infoarea';

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     <div>
       <Home/>
       <Login/>
     </div>
    </div>
  );
}

export default App;
