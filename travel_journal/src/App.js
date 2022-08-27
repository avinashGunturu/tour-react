import React from "react";
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import './App.css';
import data from "./data.js";


const App =()=>{

    const items = data.map(item => <Main item ={item}/>)
    return (
        <>
        <Navbar/>
        <div className="countries">
        {items}
        </div>
        </>
    );
}

export default App;