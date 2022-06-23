import {NavLink} from 'react-router-dom';
import logo from '../../images/logo.png';
import { Outlet } from 'react-router';
import React from 'react';
import  './Navigation.css';
const Navigation = () =>{
    return (<React.Fragment>
        <div className='nav-bar'>
        <NavLink to="/" className='navlink'><img src={logo} alt="logo"/></NavLink>
        <div className='rightnav'>
        <NavLink to="/" activeclassname="active" className='navlink'>Home</NavLink>
        <NavLink to="/products/allProducts" activeclassname="active" className='navlink'>Products</NavLink>
        <NavLink to="/signup" activeclassname="active" className='navlink'>Register</NavLink>
        <NavLink to="/login" activeclassname="active" className='navlink'>Login</NavLink>
        <NavLink to="/cart" activeclassname="active" className='navlink'>Cart</NavLink>
        </div>
        </div>
        <div className='navPage'>
        <Outlet /></div>
        
    </React.Fragment>)
}
export default Navigation;