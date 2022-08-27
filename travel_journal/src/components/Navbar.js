import React from "react";
import world from "../images/world.png"
import './Navbar.css'

const Navbar =()=>{
    return (
        <div className="logo">
            <img src={world}/>
            <small>my travel journal.</small>    
        </div>
    );
}

export default Navbar;