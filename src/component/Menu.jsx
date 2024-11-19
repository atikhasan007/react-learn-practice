//link property use kore akta page thek arek page jaya 
import React from "react";
import { NavLink } from "react-router-dom";

const menu = ()  => {
  return (
    <div>
        
        <ul>
            <li><NavLink className={({isActive})=> isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=> isActive?"active-item":"pending-item" } to="/product/10/Soap">Product</NavLink></li>
            <li><NavLink className={({isActive})=> isActive?"active-item":"pending-item"} to="/profile/atik/hasan">Profile</NavLink></li>
        </ul>

      
    </div>
  );
};

export default menu;


/// navlik two work 
//active and pending 
//nav link arrow function two parametter  support korbe 