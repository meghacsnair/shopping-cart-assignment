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
        <NavLink to="/" activeclassName="active" className='navlink'>Home</NavLink>
        <NavLink to="/products" activeclassName="active" className='navlink'>Products</NavLink>
        <NavLink to="/signup" activeclassName="active" className='navlink'>Register</NavLink>
        <NavLink to="/login" activeclassName="active" className='navlink'>Login</NavLink>
        <NavLink to="/cart" activeclassName="active" className='navlink'>Cart</NavLink>
        </div>
        </div>
        <div className='navPage'>
        <Outlet /></div>
        
    </React.Fragment>)
}
export default Navigation;